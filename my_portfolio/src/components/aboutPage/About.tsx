import React, {useEffect} from "react";
import {AboutContainer} from "./aboutStyles";
import {usePortfolioGlobalContext} from "../../context/PortfolioContext";
import {ReturnBtnCont, ReturnBtn} from "../../GlobalStyles/commonStyle";

function About() {
  let {state, dispatch} = usePortfolioGlobalContext();

  return (
    <>
      <AboutContainer>
        <ReturnBtnCont>
          <ReturnBtn
            to="/"
            onClick={() => {
              dispatch({type: "SET_TRANSITION_DOWN"});
            }}
          >
            x
          </ReturnBtn>
        </ReturnBtnCont>
      </AboutContainer>
    </>
  );
}

export default About;
