import axios from "axios";
import {
  GET_ERRORS,
  GET_ALL_PROJECTS,
  GET_PROJECTS_BY_ID,
  DELETE_PROJECT
} from "./Types";

export const createProject = (newProject, history) => {
  return async dispatch => {
    try {
      await axios.post("http://localhost:8080/api/project", newProject);
      history.push("/");
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    }
  };
};

export const getAllProjects = () => {
  return async dispatch => {
    const res = await axios.get("http://localhost:8080/api/project/all");
    dispatch({
      type: GET_ALL_PROJECTS,
      payload: res.data
    });
  };
};

export const getProjectById = id => {
  return async dispatch => {
    const res = await axios.get(`http://localhost:8080/api/project/${id}`);
    dispatch({
      type: GET_PROJECTS_BY_ID,
      payload: res.data
    });
  };
};

export const deleteProject = id => {
  return async dispatch => {
    await axios.delete(`http://localhost:8080/api/project/${id}`);
    dispatch({
      type: DELETE_PROJECT,
      payload: id
    });
  };
};
