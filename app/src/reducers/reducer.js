import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL
  } from "../actions";
  
  const initialState = {
    kanye_data: {
      quote: "",
    },
    is_loading_data: false,
    error: ""
  };
  
  export const kanyeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_START:
        return {
          ...state,
          is_loading_data: true
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          is_loading_data: false,
          kanye_data: action.payload,
          error: ""
        };
      case FETCH_DATA_FAIL:
        return {
          ...state,
          is_loading_data: false,
          error: action.payload
        };
      default:
        return state;
    }
  };