import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Absolute Fitness',
  description: 'Get in touch with Absolute Fitness. Contact us for membership inquiries, program information, or to schedule a consultation. We\'re here to help you start your fitness journey.',
  openGraph: {
    title: 'Contact Us | Absolute Fitness',
    description: 'Get in touch with Absolute Fitness. Contact us for membership inquiries, program information, or to schedule a consultation.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
