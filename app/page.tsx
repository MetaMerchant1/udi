import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import StudentCoachingSection from '@/components/home/StudentCoachingSection';
import PreparationProcessSection from '@/components/home/PreparationProcessSection';
import ParentsSection from '@/components/home/ParentsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import UniversitiesSection from '@/components/home/UniversitiesSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <StudentCoachingSection />
      <PreparationProcessSection />
      <ParentsSection />
      <TestimonialsSection />
      <UniversitiesSection />
      <CTASection />
    </>
  );
}
