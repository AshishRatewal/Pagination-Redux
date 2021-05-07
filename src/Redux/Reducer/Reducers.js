import { SET_ENTRY , PAGE_NUMBER } from "../Store/Events";

const initialState = {
  setEntry: [],
  setPageNumber: 1,
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
    default:
      return state;
  }
};