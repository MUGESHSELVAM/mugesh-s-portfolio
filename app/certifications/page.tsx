import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertWall from "@/components/CertWall";

export const metadata: Metadata = { title: "Certifications" };

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <CertWall />
      </main>
      <Footer />
    </>
  );
}
