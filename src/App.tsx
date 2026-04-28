
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/AboutSection";
import Overview from "./components/Overview";
import Footer from "./components/Footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Overview />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}