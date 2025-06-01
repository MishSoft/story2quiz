import Features from "@/app/components/Features";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Steps from "@/app/components/Steps";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Steps />
    </div>
  );
}
