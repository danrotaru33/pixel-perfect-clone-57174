import { Body, Container, Head, Heading, Hr, Html, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface ContactNotificationProps {
  name?: string
  email?: string
  message?: string
}

function ContactNotification({ name, email, message }: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#f4f4f5', fontFamily: 'Arial, Helvetica, sans-serif', margin: 0, padding: '24px 0' }}>
        <Container style={{ backgroundColor: '#ffffff', borderRadius: '8px', margin: '0 auto', maxWidth: '560px', padding: '32px' }}>
          <Heading as="h1" style={{ color: '#0f172a', fontSize: '20px', margin: '0 0 8px' }}>
            New contact form message
          </Heading>
          <Text style={{ color: '#64748b', fontSize: '14px', margin: '0 0 24px' }}>
            Submitted through the SENCON website contact form.
          </Text>
          <Section>
            <Text style={{ color: '#0f172a', fontSize: '14px', margin: '0 0 4px' }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ color: '#0f172a', fontSize: '14px', margin: '0 0 16px' }}>
              <strong>Email:</strong> {email}
            </Text>
            <Hr style={{ borderColor: '#e2e8f0', margin: '16px 0' }} />
            <Text style={{ color: '#0f172a', fontSize: '14px', lineHeight: '22px', whiteSpace: 'pre-wrap' }}>
              {message}
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
  component: ContactNotification,
  subject: (data: Record<string, any>) => `Website contact: ${data['name'] ?? 'New message'}`,
  displayName: 'Contact form notification',
  to: 'office@sencon.ro',
  previewData: {
    name: 'John Smith',
    email: 'john@example.com',
    message: 'Hello, I would like to discuss a solar project for our factory.',
  },
} satisfies TemplateEntry
