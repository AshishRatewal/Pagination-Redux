import {
  SET_ENTRY,
  PAGE_NUMBER,
  SEARCH_DATA,
  HOW_MANY_ENTRY,
  GET_EDIT_ID,
} from "../Store/Events";

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
  };
};

export const searchData = (searchTerm) => {
  return {
    type: SEARCH_DATA,
    payload: searchTerm,
  };
};

export const howManysEntry = (howMuchEntry) => {
  return {
    type: HOW_MANY_ENTRY,
    payload: howMuchEntry,
  };
};

export const getEditId = (getId) => {
  return {
    type: GET_EDIT_ID,
    payload: getId,
  }
}