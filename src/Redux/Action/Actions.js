import { SET_ENTRY, PAGE_NUMBER, SEARCH_DATA } from "../Store/Events";

export const setEntry = (entry) => {
  return {
    type: SET_ENTRY,
    payload: entry,
  };
};

export const setPageNumber = (pageNumber) => {
  return {
    type: PAGE_NUMBER,
    payload: pageNumber,
  }
}

export const searchData = (searchTerm) => {
  return {
    type: SEARCH_DATA,
    payload: searchTerm,
  }
}