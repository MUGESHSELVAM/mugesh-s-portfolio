import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import SecurityResearch from "@/components/SecurityResearch";
import ProjectsPreview from "@/components/ProjectsPreview";
import CertWall from "@/components/CertWall";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <SecurityResearch />
        <ProjectsPreview />
        <CertWall />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
