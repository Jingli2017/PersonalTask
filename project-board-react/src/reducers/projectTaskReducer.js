import {
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK,
  GET_PROJECT_TASK_BY_ID
} from "../actions/types";

const initState = {
  projectTasks: [],
  projectTask: {}
};

const projectTaskReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PROJECT_TASK:
      return {
        ...state,
        projectTasks: action.payload
      };

    case GET_PROJECT_TASK_BY_ID:
      return {
        ...state,
        projectTask: action.payload
      };

    case DELETE_PROJECT_TASK:
      const newProjectTasks = state.projectTasks.filter(projectTask => {
        return projectTask.id !== action.payload;
      });
      return {
        ...state,
        projectTasks: newProjectTasks
      };
    default:
      return state;
  }
};

export default projectTaskReducer;
