import { SET_ENTRY , PAGE_NUMBER, SEARCH_DATA } from "../Store/Events";

const initialState = {
  setEntry: [],
  setPageNumber: 1,
  searchData: '',
};

export const setEntryData = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ENTRY:
      return {
        ...state,
        setEntry: payload,
      };
    case PAGE_NUMBER:
      return{
        ...state,
        setPageNumber: payload,
      }
    case SEARCH_DATA:
      return {
        ...state,
        searchData: payload,
      }
    default:
      return state;
  }
};