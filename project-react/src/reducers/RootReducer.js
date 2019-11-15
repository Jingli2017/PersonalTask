import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";

const RootReducer = combineReducers({
  errors: errorReducer,
  projects: projectReducer
});

export default RootReducer;
