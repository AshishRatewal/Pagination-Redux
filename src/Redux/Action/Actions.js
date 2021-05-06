import { SET_ENTRY } from "../Store/Events";

export const setEntry = (entry) => {
  return {
    type: SET_ENTRY,
    payload: entry,
  };
};
