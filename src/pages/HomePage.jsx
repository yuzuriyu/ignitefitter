import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import AsSeenOn from "../components/AsSeenOn";
import QuickStart from "../components/QuickStart";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <AsSeenOn />
      <QuickStart />
      <Testimonial />
      <Pricing />
      <Banner />
      <Footer />
    </div>
  );
}
