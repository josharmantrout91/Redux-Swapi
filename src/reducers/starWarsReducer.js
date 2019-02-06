import { CHAR_DATA_FETCHING, CHAR_DATA_SUCCESS, CHAR_DATA_FAILURE } from "../actions";


const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case CHAR_DATA_FETCHING: 
    return{
      ...state,
      fetching: true
    };
    case CHAR_DATA_SUCCESS: 
    return {
      ...state,
      fetching: false,
      characters: action.payload
    };
    case CHAR_DATA_FAILURE:
    return {
      ...state,
      fetching: false,
      error: action.payload
    };
    default:
      return state;
  }
};
