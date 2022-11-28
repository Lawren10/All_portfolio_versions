import React from "react";
import Home from "./components/homePage/Home";
import About from "./components/aboutPage/About";
import {PageTransition} from "./GlobalStyles/commonStyle";
import {Routes, Route} from "react-router-dom";
import {usePortfolioGlobalContext} from "./context/PortfolioContext";

function App() {
  let {state} = usePortfolioGlobalContext();
  return (
    <>
      <PageTransition transition={state.setTransition} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
