import dynamic from "next/dynamic";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrainingProcess from "@/components/TrainingProcess";
import TrustedBy from "@/components/TrustedBy";
import WhyChooseUs from "@/components/WhyChooseUs";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <section className="section" aria-hidden="true" />,
});
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChooseUs />
        <TrainingProcess />
        <Testimonials />
        <Gallery />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
