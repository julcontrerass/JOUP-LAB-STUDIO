import { Header, Footer } from '@/shared/components/layout';
import { StudioHero, AcademyInfo, Courses, EducationCTA } from '@/features/coffee-education';

const CourseCatalogPage = () => {
  return (
    <>
      <Header />
      <StudioHero />
      <AcademyInfo />
      <Courses />
      <EducationCTA />
      <Footer />
    </>
  );
};

export default CourseCatalogPage;
