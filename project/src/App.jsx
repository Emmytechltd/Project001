import React from "react";

import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";
import Footer from './components/Footer';
import Accreditation from "./components/Accreditation";
import Blog from './components/Blog'; // Import Blog component
import PrivacyPolicy from "./components/PrivacyPolicy";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
  <>
    
    < NavBar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection /> 
    <FeatureSection />
    <Accreditation />
    <Footer />
    </div>

   
  </>
  );
};