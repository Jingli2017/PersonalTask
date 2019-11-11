import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import projectTaskReducer from "./projectTaskReducer";

const RootReducer = combineReducers({
  errors: errorsReducer,
  project_task: projectTaskReducer
});

export default RootReducer;
