type actionType = {
  type: string;
};

type porfolioStateType = {
  setTransition: boolean;
};

export const portfolioState = {
  setTransition: false,
};

export const portfolioReducer = (
  state: porfolioStateType,
  action: actionType
) => {
  switch (action.type) {
    case "SET_TRANSITION_DOWN":
      return { ...state, setTransition: true };
    case "SET_TRANSITION_UP":
      return { ...state, setTransition: false };
    default:
      return state;
  }
};
