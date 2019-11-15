import {
  GET_ALL_PROJECTS,
  GET_PROJECTS_BY_ID,
  DELETE_PROJECT
} from "../actions/Types";

const initState = {
  projects: [],
  project: {}
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_PROJECTS_BY_ID:
      return {
        ...state,
        project: action.payload
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => {
          return project.projectIdentifier !== action.payload;
        })
      };
    default:
      return state;
  }
};

export default projectReducer;
