import { Header, Footer } from '@/shared/components/layout';
import { LabHero, LabDescription } from '@/features/coffee-education';

const LabPage = () => {
  return (
    <>
      <Header />
      <LabHero />
      <LabDescription />
      <Footer />
    </>
  );
};

export default LabPage;
