import React from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import PersonalTrainingPage from "./pages/PersonalTrainingPage";
import PricingPage from "./pages/PricingPage";

export default function App() {
  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal-training" element={<PersonalTrainingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </div>
  );
}
