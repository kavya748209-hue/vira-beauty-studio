import { FloatingButtons } from "@/components/FloatingButtons";
import Navigation from "@/components/Navigation";
import AboutPage from "@/pages/AboutPage";
import BookPage from "@/pages/BookPage";
import BridalPackagesPage from "@/pages/BridalPackagesPage";
import CelebrityPage from "@/pages/CelebrityPage";
import HomePage from "@/pages/HomePage";
import PortfolioPage from "@/pages/PortfolioPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <FloatingButtons />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/celebrity" element={<CelebrityPage />} />
        <Route path="/bridal-packages" element={<BridalPackagesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
