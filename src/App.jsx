import "./App.css";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
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
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
