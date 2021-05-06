import { SET_ENTRY } from "../Store/Events";

const initialState = {
  setEntry: [],
};

export const setEntryData = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ENTRY:
      return {
        ...state,
        setEntry: payload,
      };
    default:
      return state;
  }
};
