import {
  ADD_BILLING_USER,
  DELETE_BILLING_USER,
  UPDATE_BILLING_USER,
} from "../actionType/actionType";

const initialState = {
  users: [
    {
      id: 1,
      user: "Oliver Liam",
      companyName: "Viking Burrito",
      email: "oliver@burrito.com",
      vatNumber: "FRB1235476",
    },
    {
      id: 2,
      user: "Lucas Harper",
      companyName: "Stone Tech Zone",
      email: "lucas@stone-tech.com",
      vatNumber: "FRB1235476",
    },
    {
      id: 3,
      user: "Ethan James",
      companyName: "Fiber Notion",
      email: "ethan@fiber.com",
      vatNumber: "FRB1235476",
    },
  ],
};

const billingUserRuducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BILLING_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case UPDATE_BILLING_USER:
      let index = state.users.findIndex((i) => i.id == payload.id);
      const newValue = state.users;
      newValue[index] = payload;
      return {
        ...state,
        users: newValue,
      };

    case DELETE_BILLING_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id != payload),
      };
    default:
      return state;
  }
};
export default billingUserRuducer;
