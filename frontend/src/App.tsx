import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { BusServiceSection } from './sections/BusServiceSection';
import { TruckServiceSection } from './sections/TruckServiceSection';
import { ContractTransportSection } from './sections/ContractTransportSection';
import { RoutesCoverageSection } from './sections/RoutesCoverageSection';
import { WhyChooseUsSection } from './sections/WhyChooseUsSection';

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
    </>
  );
}

export default App;