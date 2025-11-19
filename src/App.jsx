import "./App.css";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Footer from "./components/layout/Footer";
import Techstack from "./components/sections/Techstack";
import Projects from "./components/sections/Projects";
import SectionWrapper from "./components/common/Sectionwrapper";
import Contact from "./components/sections/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <SectionWrapper className="bg-gray-900 text-white">
                  <About />
                </SectionWrapper>

                <SectionWrapper className="bg-gray-900 text-white">
                  <Services />
                </SectionWrapper>

                <SectionWrapper className="bg-gray-900 text-white">
                  <Techstack />
                </SectionWrapper>

                <SectionWrapper className="bg-gray-900 text-white">
                  <Projects />
                </SectionWrapper>

                <SectionWrapper className="bg-gray-900 text-white">
                  <Contact />
                </SectionWrapper>

                <SectionWrapper className="bg-gray-900 text-white">
                  <Footer />
                </SectionWrapper>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
