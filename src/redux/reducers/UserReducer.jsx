const initialState = {
  credible: false,
  name: "",
  logs: [],
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "USER_ACCESS":
      return { ...state, name: action.payload, credible: true };
    case "USER_ACCESS_INVERSE":
      return { ...state, credible: false };
    case "USER_ACCESSNAME":
      return { ...state, logs: action.payload };
    case "USER_LOGS_DELETE":
      return { ...state, logs: [] };
    default:
      return state;
  }
};

export default userReducers;
