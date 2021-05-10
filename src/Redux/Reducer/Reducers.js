import {
  SET_ENTRY,
  PAGE_NUMBER,
  SEARCH_DATA,
  HOW_MANY_ENTRY,
  GET_EDIT_ID,
} from "../Store/Events";

const initialState = {
  setEntry: [],
  setPageNumber: 1,
  searchData: "",
  howMuchEntry: 20,
  getEditId: '',
};

export const setEntryData = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ENTRY:
      return {
        ...state,
        setEntry: payload,
      };
    case PAGE_NUMBER:
      return {
        ...state,
        setPageNumber: payload,
      };
    case SEARCH_DATA:
      return {
        ...state,
        searchData: payload,
      };
    case HOW_MANY_ENTRY:
      return {
        ...state,
        howMuchEntry: payload,
      };
    case GET_EDIT_ID:
      return {
        ...state,
        getEditId: payload,
      }
    default:
      return state;
  }
};
