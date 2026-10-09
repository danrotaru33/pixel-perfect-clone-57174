import { Body, Container, Head, Heading, Hr, Html, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface QuoteRequestNotificationProps {
  name?: string
  company?: string
  email?: string
  phone?: string
  product?: string
  details?: string
}

function QuoteRequestNotification({ name, company, email, phone, product, details }: QuoteRequestNotificationProps) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f4f4f5', fontFamily: 'Arial, Helvetica, sans-serif', margin: 0, padding: '24px 0' }}>
        <Container style={{ backgroundColor: '#ffffff', borderRadius: '8px', margin: '0 auto', maxWidth: '560px', padding: '32px' }}>
          <Heading as="h1" style={{ color: '#0f172a', fontSize: '20px', margin: '0 0 8px' }}>
            New quote request
          </Heading>
          <Text style={{ color: '#64748b', fontSize: '14px', margin: '0 0 24px' }}>
            Submitted through the SENCON Power Equipment page.
          </Text>
          <Section>
            <Text style={{ color: '#0f172a', fontSize: '14px', margin: '0 0 4px' }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ color: '#0f172a', fontSize: '14px', margin: '0 0 4px' }}>
              <strong>Company:</strong> {company || '—'}
            </Text>
            <Text style={{ color: '#0f172a', fontSize: '14px', margin: '0 0 4px' }}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ color: '#0f172a', fontSize: '14px', margin: '0 0 4px' }}>
              <strong>Phone:</strong> {phone || '—'}
            </Text>
            <Text style={{ color: '#0f172a', fontSize: '14px', margin: '0 0 16px' }}>
              <strong>Product:</strong> {product}
            </Text>
            <Hr style={{ borderColor: '#e2e8f0', margin: '16px 0' }} />
            <Text style={{ color: '#0f172a', fontSize: '14px', lineHeight: '22px', whiteSpace: 'pre-wrap' }}>
              {details || 'No additional details provided.'}
            </Text>
          </Section>
          <Hr style={{ borderColor: '#e2e8f0', margin: '24px 0 16px' }} />
          <Text style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>
            You can reply directly to this email to respond to {name}.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: QuoteRequestNotification,
  subject: (data: Record<string, any>) => `Quote request: ${data['product'] ?? 'Power equipment'} — ${data['name'] ?? 'New request'}`,
  displayName: 'Quote request notification',
  to: 'office@sencon.ro',
  previewData: {
    name: 'John Smith',
    company: 'Company SRL',
    email: 'john@example.com',
    phone: '+40 700 000 000',
    product: 'Power transformer',
    details: '110/20 kV, 40 MVA, delivery to Brașov, Q2 2027.',
  },
} satisfies TemplateEntry
