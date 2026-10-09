import { createServerFn } from '@tanstack/react-start'

// Public form submissions (contact + quote). No auth required — input is
// validated, honeypot-filtered and best-effort rate limited before sending.

const RECIPIENT = 'office@sencon.ro'

// Best-effort in-memory rate limit: max 5 submissions per IP per 10 minutes.
const submissions = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5

function checkRateLimit(ip: string) {
  const now = Date.now()
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  if (recent.length >= RATE_LIMIT_MAX) {
    throw new Error('Too many submissions. Please try again later.')
  }
  recent.push(now)
  submissions.set(ip, recent)
}

async function getIp() {
  const { getRequestIP } = await import('@tanstack/react-start/server')
  return getRequestIP() ?? 'unknown'
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

async function send(templateName: string, data: Record<string, string>, replyTo: string, idempotencyKey: string) {
  const { sendTemplateEmail } = await import('./email-templates/send-email')
  return sendTemplateEmail(templateName, RECIPIENT, {
    templateData: data,
    replyTo,
    idempotencyKey,
  })
}

export const submitContactForm = createServerFn({ method: 'POST' })
  .inputValidator((data: { name: string; email: string; message: string; website?: string; submissionId?: string }) => data)
  .handler(async ({ data }) => {
    // Honeypot: bots fill the hidden "website" field — pretend success.
    if (data.website) return { ok: true }

    const name = clean(data.name, 100)
    const email = clean(data.email, 255)
    const message = clean(data.message, 2000)
    if (!name || !EMAIL_RE.test(email) || !message) {
      throw new Error('Please fill in your name, a valid email and a message.')
    }

    checkRateLimit(await getIp())

    await send(
      'contact-notification',
      { name, email, message },
      email,
      `contact-${clean(data.submissionId, 64) || crypto.randomUUID()}`
    )
    return { ok: true }
  })

export const submitQuoteRequest = createServerFn({ method: 'POST' })
  .inputValidator((data: {
    name: string
    company?: string
    email: string
    phone?: string
    product: string
    details?: string
    website?: string
    submissionId?: string
  }) => data)
  .handler(async ({ data }) => {
    if (data.website) return { ok: true }

    const name = clean(data.name, 100)
    const company = clean(data.company, 100)
    const email = clean(data.email, 255)
    const phone = clean(data.phone, 30)
    const product = clean(data.product, 100)
    const details = clean(data.details, 1000)
    if (!name || !EMAIL_RE.test(email) || !product) {
      throw new Error('Please fill in your name, a valid email and the product.')
    }

    checkRateLimit(await getIp())

    await send(
      'quote-request-notification',
      { name, company, email, phone, product, details },
      email,
      `quote-${clean(data.submissionId, 64) || crypto.randomUUID()}`
    )
    return { ok: true }
  })
