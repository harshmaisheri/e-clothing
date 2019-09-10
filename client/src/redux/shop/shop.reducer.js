import {
  FETCH_COLLECTION_FAIL,
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCESS
} from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      };
    case FETCH_COLLECTION_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
