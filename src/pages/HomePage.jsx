import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import AsSeenOn from "../components/AsSeenOn";
import QuickStart from "../components/QuickStart";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <AsSeenOn />
      <QuickStart />
    </div>
  );
}
