import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import Services from "@/components/Services";
import HowMeridianWorks from "@/components/HowMeridianWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import ConsultationCTA from "@/components/ConsultationCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustStats />
      <Services />
      <HowMeridianWorks />
      <WhyChooseUs />
      <ConsultationCTA />
      <Contact />
      <Footer />
    </main>
  );
}