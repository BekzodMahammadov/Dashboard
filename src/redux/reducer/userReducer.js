import { ADD_USER, DELETE_USER, UPDATE_USER } from "../actionType/actionType";

import Img1 from "../../assets/img/team-2.jpg";
import Img2 from "../../assets/img/team-3.jpg";
import Img3 from "../../assets/img/team-4.jpg";
import Img4 from "../../assets/img/team-3.jpg";
import Img5 from "../../assets/img/team-2.jpg";
import Img6 from "../../assets/img/team-4.jpg";

const initialState = {
  users: [
    {
      id: 1,
      author: "John Michael",
      email: "john@creative-tim.com",
      job: "Manager",
      type: "Organization",
      status: true,
      employed: "23/04/18",
      img: Img1,
    },
    {
      id: 2,
      author: "Alexa Liras",
      email: "alexa@creative-tim.com",
      job: "Programator",
      type: "Developer",
      status: false,
      employed: "11/01/19",
      img: Img2,
    },
    {
      id: 3,
      author: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      job: "Executive",
      type: "Projects",
      status: true,
      employed: "19/09/17",
      img: Img3,
    },
    {
      id: 4,
      author: "Michael Levi",
      email: "michael@creative-tim.com",
      job: "Programator",
      type: "Developer",
      status: true,
      employed: "24/12/08",
      img: Img4,
    },
    {
      id: 5,
      author: "Richard Gran",
      email: "richard@creative-tim.com",
      job: "Manager",
      type: "Executive",
      status: false,
      employed: "04/10/21",
      img: Img5,
    },
    {
      id: 6,
      author: "Miriam Eric",
      email: "miriam@creative-tim.com",
      job: "Programtor",
      type: "Developer",
      status: false,
      employed: "14/09/20",
      img: Img6,
    },
  ],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case UPDATE_USER:
      let index = state.users.findIndex((i) => i.id == payload.id);
      const newValue = state.users;
      newValue[index] = payload;
      return {
        ...state,
        users: newValue,
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id != payload),
      };
    default:
      return state;
  }
};
export default userReducer;
