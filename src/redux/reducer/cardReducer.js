import { ADD_CARD, DELETE_CARD, UPDATE_CARD } from "../actionType/actionType";

const initialState = {
  cards: [
    { id: 1, cardName: "Master Card", number: "1234 5487 9754 7852" },
    { id: 2, cardName: "Visa", number: "8960 7844 8724 8755" },
  ],
};

const cardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, payload],
      };
    case UPDATE_CARD:
      let index = state.cards.findIndex((i) => i.id == payload.id);
      const newValue = state.cards;
      newValue[index] = payload;
      return {
        ...state,
        cards: newValue,
      };

    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((user) => user.id != payload),
      };
    default:
      return state;
  }
};
export default cardReducer;
