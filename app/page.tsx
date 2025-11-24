import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import KeyPrinciplesSection from '@/components/home/KeyPrinciplesSection';
import StudentCoachingSection from '@/components/home/StudentCoachingSection';
import PreparationProcessSection from '@/components/home/PreparationProcessSection';
import ParentsSection from '@/components/home/ParentsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <KeyPrinciplesSection />
      <StudentCoachingSection />
      <PreparationProcessSection />
      <ParentsSection />
      <CTASection />
    </>
  );
}
