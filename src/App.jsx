import React from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import PersonalTrainingPage from "./pages/PersonalTrainingPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import SelectedBlogPage from "./pages/SelectedBlogPage";
import BlogContextProvider from "./context/BlogContext";

export default function App() {
  return (
    <BlogContextProvider>
      <div className="font-roboto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-training" element={<PersonalTrainingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<SelectedBlogPage />} />
        </Routes>
      </div>
    </BlogContextProvider>
  );
}
