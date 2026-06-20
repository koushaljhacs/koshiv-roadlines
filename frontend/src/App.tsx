import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { BusServiceSection } from './sections/BusServiceSection';
import { TruckServiceSection } from './sections/TruckServiceSection';
import { ContractTransportSection } from './sections/ContractTransportSection';
import { RoutesCoverageSection } from './sections/RoutesCoverageSection';
import { WhyChooseUsSection } from './sections/WhyChooseUsSection';
import { AboutSection } from './sections/AboutSection';
import { InquirySection } from './sections/InquirySection';

function App() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BusServiceSection />
      <TruckServiceSection />
      <ContractTransportSection />
      <RoutesCoverageSection />
      <WhyChooseUsSection />
      <AboutSection />
      <InquirySection />
    </>
  );
}

export default App;