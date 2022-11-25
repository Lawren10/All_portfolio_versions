import React from "react";
import Home from "./components/homePage/Home";
import {PageTransition} from "./GlobalStyles/commonStyle";

function App() {
  return (
    <>
      <PageTransition transition={false} />
      <Home />
    </>
  );
}

export default App;
