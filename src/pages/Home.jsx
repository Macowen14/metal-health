import React from "react";
import HeroSection from "../components/HeroSection";
import DescriptionSection from "../components/Description";
import TestimonialSection from "../components/TestimonialSection";
import SpecialistsSection from "../components/SpecialistsSection";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <>
      <HeroSection />
      <DescriptionSection />
      <TestimonialSection />
      <SpecialistsSection />
      <FAQ />
    </>
  );
}

export default Home;
