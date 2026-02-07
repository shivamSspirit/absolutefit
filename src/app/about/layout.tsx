import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Absolute Fitness',
  description: 'Learn about Absolute Fitness - our philosophy, expert trainers, and commitment to helping you achieve your fitness goals. The Complete Health & Fitness Centre.',
  openGraph: {
    title: 'About Us | Absolute Fitness',
    description: 'Learn about Absolute Fitness - our philosophy, expert trainers, and commitment to helping you achieve your fitness goals.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
