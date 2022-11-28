import React, {useContext, createContext, useReducer} from "react";
import {portfolioState, portfolioReducer} from "../reducer/portfolioReducer";

interface contextProp {
  state: {
    setTransition: boolean;
  };
  dispatch: Function;
}

let initialContext = {
  state: {
    setTransition: false,
  },
  dispatch: Function,
};

const MyPortfolioContext = createContext<contextProp>(initialContext);

type Props = {
  children: JSX.Element;
};

function PortfolioContext({children}: Props) {
  const [state, dispatch] = useReducer(portfolioReducer, portfolioState);

  const valueContex: contextProp = {
    state: state,
    dispatch: dispatch,
  };

  return (
    <MyPortfolioContext.Provider value={valueContex}>
      {children}
    </MyPortfolioContext.Provider>
  );
}

export const usePortfolioGlobalContext = (): contextProp => {
  return useContext(MyPortfolioContext);
};

export default PortfolioContext;
