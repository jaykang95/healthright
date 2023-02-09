import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.SIGN_UP_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
        error: null,
      };
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
        error: null,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
        error: null,
      };
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;