import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsPreview from "@/components/ProjectsPreview";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <ProjectsPreview />
      </main>
      <Footer />
    </>
  );
}
