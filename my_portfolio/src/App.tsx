import React from "react";
import Home from "./components/homePage/Home";
import About from "./components/aboutPage/About";
import Resume from "./components/resumePage/Resume";
import { PageTransition } from "./GlobalStyles/commonStyle";
import { Routes, Route } from "react-router-dom";
import { usePortfolioGlobalContext } from "./context/PortfolioContext";

function App() {
  let { state } = usePortfolioGlobalContext();
  return (
    <>
      <PageTransition transition={state.setTransition} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
