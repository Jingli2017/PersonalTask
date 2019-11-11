import axios from "axios";
import {
  GET_ERRORS,
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK,
  GET_PROJECT_TASK_BY_ID
} from "./types";

export const addProjectTask = (projectTask, history) => {
  return async dispatch => {
    try {
      await axios.post("http://localhost:8080/api/board", projectTask);
      history.push("/");
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    }
  };
};

export const getAllProjectTask = () => {
  return async dispatch => {
    const res = await axios.get("http://localhost:8080/api/board/all");
    dispatch({
      type: GET_PROJECT_TASK,
      payload: res.data
    });
  };
};

export const deleteTask = id => {
  return async dispatch => {
    try {
      if (window.confirm(`You are deleting the project task ${id}`)) {
        const res = await axios.delete(`http://localhost:8080/api/board/${id}`);
        console.log(res.data);
        dispatch({
          type: DELETE_PROJECT_TASK,
          payload: id
        });
      }
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data.message
      });
    }
  };
};

export const getProjectTaskById = (id, history) => {
  return async dispatch => {
    try {
      const res = await axios.get(`http://localhost:8080/api/board/${id}`);
      dispatch({
        type: GET_PROJECT_TASK_BY_ID,
        payload: res.data
      });
    } catch (error) {
      console.log(error.response);
      history.push("/");
    }
  };
};

export const updateProjectTask = (projectTaskWithId, history) => {
  return async dispatch => {
    try {
      await axios.post("http://localhost:8080/api/board", projectTaskWithId);
      history.push("/");
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    }
  };
};
