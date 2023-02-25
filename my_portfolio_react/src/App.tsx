import React from "react";
import Home from "./components/homePage/Home";
import About from "./components/aboutPage/About";
import Resume from "./components/resumePage/Resume";
import Portfolio from "./components/portfolioPage/Portfolio";
import Contact from "./components/contactPage/Contact";
import { PageTransition, PageTransitionDown } from "./GlobalStyles/commonStyle";
import { Routes, Route } from "react-router-dom";
import { usePortfolioGlobalContext } from "./context/PortfolioContext";

function App() {
  let { state } = usePortfolioGlobalContext();
  return (
    <>
      <PageTransition transition={state.setTransition} />
      <PageTransitionDown transition={state.setTransition} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
