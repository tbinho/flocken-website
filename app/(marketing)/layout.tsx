import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="marketing" />
      {children}
      <Footer variant="marketing" />
    </>
  );
}

