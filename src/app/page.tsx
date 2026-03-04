"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExpertiseTags from "@/components/ExpertiseTags";
import About from "@/components/About";
import Experience from "@/components/Experience";
import AuditFindings from "@/components/AuditFindings";
import SecurityTools from "@/components/SecurityTools";
import Writing from "@/components/Writing";
import Hobby from "@/components/Hobby";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExpertiseTags />
        <About />
        <Experience />
        <AuditFindings />
        <SecurityTools />
        <Writing />
        <Hobby />
      </main>
      <Footer />
    </>
  );
}
