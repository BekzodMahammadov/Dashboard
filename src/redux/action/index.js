import {
  ADD_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  CHANGE_THEME,
  NAV_THEME,
  GET_CARD,
  ADD_CARD,
  DELETE_CARD,
  UPDATE_CARD,
  GET_BILLING_USER,
  ADD_BILLING_USER,
  DELETE_BILLING_USER,
  UPDATE_BILLING_USER,
  CHANGE,
  NAVBAR_CHANGE,
  NAVBAR_CLOSE,
} from "../actionType/actionType";

// Add user
export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

export const deleteUser = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};

export const updateUser = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  };
};

// Change Theme
export const themeChange = (payload) => {
  return {
    type: CHANGE_THEME,
    payload,
  };
};

export const navTheme = (payload) => {
  return {
    type: NAV_THEME,
    payload,
  };
};

// Add card
export const getCard = () => {
  return {
    type: GET_CARD,
  };
};

export const addCard = (payload) => {
  return {
    type: ADD_CARD,
    payload,
  };
};

export const deleteCard = (payload) => {
  return {
    type: DELETE_CARD,
    payload,
  };
};

export const updateCard = (payload) => {
  return {
    type: UPDATE_CARD,
    payload,
  };
};

// Add billing user
export const getBillingUser = () => {
  return {
    type: GET_BILLING_USER,
  };
};

export const addBillingUser = (payload) => {
  return {
    type: ADD_BILLING_USER,
    payload,
  };
};

export const deleteBillingUser = (payload) => {
  return {
    type: DELETE_BILLING_USER,
    payload,
  };
};

export const updateBillingUser = (payload) => {
  return {
    type: UPDATE_BILLING_USER,
    payload,
  };
};

export const navbarChanger = (payload) => {
  return {
    type: CHANGE,
    payload,
  };
};
export const navbarChanger2 = (payload) => {
  return {
    type: NAVBAR_CLOSE,
    payload,
  };
};

export const navbarChanger3 = (payload) => {
  return {
    type: NAVBAR_CHANGE,
    payload,
  };
};
