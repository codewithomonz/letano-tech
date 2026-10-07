import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <WhyUs />
      <Work />
      <Process />
      <Pricing />
    </main>
  );
}