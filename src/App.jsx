import "./App.css";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Footer from "./components/layout/Footer";
import SectionWrapper from "./components/common/Sectionwrapper";
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
