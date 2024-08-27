export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_AFTER_LOGIN":
      return { ...state, user: { ...state.user, ...action.payload } };
    case "PERSIST_USER_AFTER_REFRESH":
      return { ...state, user: { ...state.user, ...action.payload } };
    case "LOGOUT":
      return { ...state, user: {} };
    default:
      return state;
  }
};
