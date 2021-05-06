import { combineReducers } from "redux";
import { setEntryData } from "../Reducer/Reducers";
const reducer = combineReducers({
  allEntry: setEntryData,
});
export default reducer;