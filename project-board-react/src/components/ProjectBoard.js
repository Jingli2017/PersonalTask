import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectTaskItem from "./projectTask/ProjectTaskItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllProjectTask } from "../actions/projectTaskActions";

class ProjectBoard extends Component {
  componentDidMount() {
    this.props.getAllProjectTask();
  }
  render() {
    const { projectTasks } = this.props.projectTasks;
    let boardContent;
    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    const boardAlgorithm = projectTasks => {
      if (projectTasks.length < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            No Project On The Board
          </div>
        );
      } else {
        const tasks = projectTasks.map(projectTask => (
          <ProjectTaskItem key={projectTask.id} task={projectTask} />
        ));
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i].props.task.status === "TO_DO") {
            todoItems.push(tasks[i]);
          }

          if (tasks[i].props.task.status === "IN_PROGRESS") {
            inProgressItems.push(tasks[i]);
          }

          if (tasks[i].props.task.status === "DONE") {
            doneItems.push(tasks[i]);
          }
        }
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center mb-2">
                  <div className="card-header bg-secondary text-white">
                    <h3>TO DO</h3>
                  </div>
                </div>

                {todoItems}
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-2">
                  <div className="card-header bg-primary text-white">
                    <h3>In Progress</h3>
                  </div>
                </div>

                {inProgressItems}
              </div>
              <div className="col-md-4">
                <div className="card text-center mb-2">
                  <div className="card-header bg-success text-white">
                    <h3>Done</h3>
                  </div>
                </div>

                {doneItems}
              </div>
            </div>
          </div>
        );
      }
    };

    boardContent = boardAlgorithm(projectTasks);

    return (
      <div className="container">
        <Link to="/addProjectTask" className="btn btn-primary mb-3">
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        {boardContent}
      </div>
    );
  }
}
ProjectBoard.propTypes = {
  getAllProjectTask: PropTypes.func.isRequired,
  projectTasks: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    projectTasks: state.project_task
  };
};
export default connect(
  mapStateToProps,
  { getAllProjectTask }
)(ProjectBoard);
