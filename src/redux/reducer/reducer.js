import { combineReducers } from "redux";

import userReducer from "./userReducer";
import themeReducer from "./themeReducer";
import navbarThemeReducer from "./navbarThemeReducer";
import cardReducer from "./cardReducer";
import billingUserRuducer from "./billingUserReducer";
import navbarReducer from "./navbarReducer";

const rootReducer = combineReducers({
  userReducer,
  themeReducer,
  navbarThemeReducer,
  cardReducer,
  billingUserRuducer,
  navbarReducer,
});

export default rootReducer;
