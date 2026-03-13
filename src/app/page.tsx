import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <OurServices />
      <Testimonials />
      <FAQ />
      <GetInTouch />
      <Footer />
    </main>
  );
}
