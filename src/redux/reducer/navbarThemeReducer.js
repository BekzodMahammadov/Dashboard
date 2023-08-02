import { NAV_THEME } from "../actionType/actionType";

const initialValue = {
  navTheme: {
    white: "#fff",
    transparent: "#F8F9FA",
  },
  actives: "#F8F9FA",
};

const themeReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case NAV_THEME:
      return {
        ...state,
        actives: state.navTheme[payload],
      };
      break;

    default:
      return state;
      break;
  }
};
export default themeReducer;
