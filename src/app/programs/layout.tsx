import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programs & Packages | Absolute Fitness',
  description: 'Explore our membership packages and training programs. From drop-in sessions to monthly unlimited - find the perfect plan for your fitness journey.',
  openGraph: {
    title: 'Programs & Packages | Absolute Fitness',
    description: 'Explore our membership packages and training programs. From drop-in sessions to monthly unlimited - find the perfect plan for your fitness journey.',
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
