import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTask } from "../../actions/projectTaskActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ProjectTaskItem extends Component {
  handleDelete = () => {
    this.props.deleteTask(this.props.task.id);
  };
  render() {
    const task = this.props.task;
    return (
      <div className="card mb-1 bg-light">
        <div className="card-header text-primary">ID: {task.id}</div>
        <div className="card-body bg-light">
          <h5 className="card-title">{task.summary}</h5>
          <p className="card-text text-truncate ">{task.acceptanceCriteria}</p>
          <Link to={"/projectTask/" + task.id} className="btn btn-primary">
            View / Update
          </Link>

          <button className="btn btn-danger ml-4" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

ProjectTaskItem.propTypes = {
  deleteTask: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTask }
)(ProjectTaskItem);
