const initialState = {
  credible: false,
  name: "",
  logs: [],
  success: false,
  loading: false,
  fail: false,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "USER_ACCESS":
      return { ...state, name: action.payload, credible: true };
    case "USER_ACCESS_INVERSE":
      return { ...state, credible: false };
    case "USER_ACCESSNAME_FAIL":
      return {
        ...state,
        success: false,
        loading: false,
        fail: true,
      };
    case "USER_ACCESSNAME_LOADING":
      return { ...state, success: false, loading: true, fail: false };
    case "USER_ACCESSNAME_SUCCESS":
      return {
        ...state,
        success: false,
        loading: true,
        fail: false,
        logs: action.payload,
      };
    case "LOGS_LOGOUT":
      return { ...state, logs: [] };
    case "LOGS_APPEND":
      return { ...state, logs: action.payload };
    case "LOGS_DELETE":
      return { ...state };

    default:
      return state;
  }
};

export default userReducers;
