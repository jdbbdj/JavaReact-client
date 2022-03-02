const initialState = {
  credible: false,
  name: "",
  logs: [],
  logsdata: [],
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
    case "LOGS_DELETE":
      return { ...state };
    case "LOGS_VIEW_LOADING":
      return { ...state, success: false, loading: true, fail: false };
    case "LOGS_VIEW_SUCCESS":
      return {
        ...state,
        success: true,
        loading: false,
        fail: false,
        logsdata: action.payload,
      };
    case "LOGS_VIEW_FAIL":
      return { ...state, success: false, loading: false, fail: true };
    case "LOGS_APPEND_LOADING":
      return { ...state, success: false, loading: true, fail: false };
    case "LOGS_APPEND_SUCCESS":
      return { ...state, success: true, loading: false, fail: false };
    case "LOGS_APPEND_FAIL":
      return { ...state, success: false, loading: false, fail: true };
    case "LOGS_UPDATE_LOADING":
      return { ...state, success: false, loading: true, fail: false };
    case "LOGS_UPDATE_SUCCESS":
      return { ...state, success: true, loading: false, fail: false };
    case "LOGS_UPDATE_FAIL":
      return { ...state, success: false, loading: false, fail: true };
    default:
      return state;
  }
};

export default userReducers;
