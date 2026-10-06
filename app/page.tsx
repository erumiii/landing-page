import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
