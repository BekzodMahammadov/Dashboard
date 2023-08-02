import { CHANGE, NAVBAR_CHANGE, NAVBAR_CLOSE } from "../actionType/actionType";

const initialState = {
  changed: false,
  navbarOpen: true,
  navbarClose: false,
};

const navbarReducer = (state = initialState, { type }) => {
  switch (type) {
    case CHANGE:
      return {
        ...state,
        changed: state.changed ? false : true,
      };
    case NAVBAR_CHANGE:
      return {
        ...state,
        navbarOpen: state.navbarOpen ? false : true,
      };
    case NAVBAR_CLOSE:
      return {
        ...state,
        navbarClose: state.navbarClose ? false : true,
      };
    default:
      return state;
  }
};
export default navbarReducer;
