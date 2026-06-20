import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { BusServiceSection } from './sections/BusServiceSection';
import { TruckServiceSection } from './sections/TruckServiceSection';
import { ContractTransportSection } from './sections/ContractTransportSection';

function App() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BusServiceSection />
      <TruckServiceSection />
      <ContractTransportSection />
    </>
  );
}

export default App;