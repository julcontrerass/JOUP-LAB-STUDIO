import { Header, Footer } from '@/shared/components/layout';
import { BrandHero, StorySection, PillarsSection, EssenceSection } from '@/features/brand';
import { JoinUsCTA, SlowBarSection } from '@/features/community';
import '../styles/home-page.css';

function HomePage() {
  return (
    <>
      <Header />
      <BrandHero />
      <StorySection />
      <PillarsSection />
      <EssenceSection />
      <JoinUsCTA />
      <SlowBarSection />
      <Footer />
    </>
  );
}

export default HomePage;
