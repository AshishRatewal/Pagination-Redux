import { SET_ENTRY, PAGE_NUMBER } from "../Store/Events";

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