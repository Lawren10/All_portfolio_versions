import React, {useContext, createContext} from "react";

const MyPortfolioContext = createContext({});
type Props = {
  children: JSX.Element;
};

function PortfolioContext({children}: Props) {
  return (
    <MyPortfolioContext.Provider value={{name: "lawrence"}}>
      {children}
    </MyPortfolioContext.Provider>
  );
}

export const usePortfolioGlobalContext = () => {
  return useContext(MyPortfolioContext);
};

export default PortfolioContext;
