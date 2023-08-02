import { CHANGE_THEME } from "../actionType/actionType";

const initialValue = {
  theme: {
    pink: "linear-gradient(310deg, #7928CA 0%, #FF0080 100%)",
    black: "linear-gradient(310deg, #141727 0%, #3A416F 100%)",
    blue: "linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)",
    green: "linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)",
    orange: "linear-gradient(310deg, #f53939 0%, #fbcf33 100%)",
    red: "linear-gradient(310deg, #ea0606 0%, #ff667c 100%)",
  },
  actived: "linear-gradient(310deg, #7928CA 0%, #FF0080 100%)",
};

const themeReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case CHANGE_THEME:
      return {
        ...state,
        actived: state.theme[payload],
      };
      break;

    default:
      return state;
      break;
  }
};
export default themeReducer;
