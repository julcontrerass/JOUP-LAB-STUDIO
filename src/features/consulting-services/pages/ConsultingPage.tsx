import { Header, Footer } from '@/shared/components/layout';
import { ServicesHero, ServicesOverview, ServiceProcess, ContactForm } from '@/features/consulting-services';

const ConsultingPage = () => {
  return (
    <>
      <Header />
      <ServicesHero />
      <ServicesOverview />
      <ServiceProcess />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ConsultingPage;

