import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutSection from "./pages/AboutSection";
import AppointmentSection from "./pages/AppointmentSection";
import CelebritySection from "./pages/CelebritySection";
import CtaSection from "./pages/CtaSection";
import FaqSection from "./pages/FaqSection";
import HeroSection from "./pages/HeroSection";
import MapSection from "./pages/MapSection";
import PortfolioSection from "./pages/PortfolioSection";
import ReviewsSection from "./pages/ReviewsSection";
import ServicesSection from "./pages/ServicesSection";
import WhyChooseUsSection from "./pages/WhyChooseUsSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="portfolio">
          <PortfolioSection />
        </section>
        <section id="celebrity">
          <CelebritySection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="why-us">
          <WhyChooseUsSection />
        </section>
        <section id="reviews">
          <ReviewsSection />
        </section>
        <section id="appointment">
          <AppointmentSection />
        </section>
        <section id="faq">
          <FaqSection />
        </section>
        <section id="map">
          <MapSection />
        </section>
        <section id="contact">
          <CtaSection />
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
