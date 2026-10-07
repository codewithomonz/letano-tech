import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Services />
        <WhyUs />
        <Work />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}