import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getProjectTaskById,
  updateProjectTask
} from "../../actions/projectTaskActions";
import classnames from "classnames";

class UpdateProjectTask extends Component {
  state = {
    summary: "",
    acceptanceCriteria: "",
    status: "",
    error: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newProjectTaskWithId = {
      id: this.props.match.params.id,
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status
    };
    this.props.updateProjectTask(newProjectTaskWithId, this.props.history);
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({
  //       error: nextProps.errors
  //     });
  //   }
  //   let projectTask = nextProps.projectTask;
  //   this.setState({
  //     summary: projectTask.summary,
  //     acceptanceCriteria: projectTask.acceptanceCriteria,
  //     status: projectTask.status
  //   });
  // }

  componentDidUpdate(preProps) {
    if (this.props.errors !== preProps.errors) {
      this.setState({
        error: this.props.errors
      });
    }
    if (preProps !== this.props) {
      let projectTask = this.props.projectTask;
      this.setState({
        summary: projectTask.summary,
        acceptanceCriteria: projectTask.acceptanceCriteria,
        status: projectTask.status
      });
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getProjectTaskById(id, this.props.history);
  }

  render() {
    const error = this.state.error;
    return (
      <div className="addProjectTask">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/" className="btn btn-light">
                Back to Board
              </Link>
              <h4 className="display-4 text-center">View Project Task</h4>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": error.summary
                    })}
                    name="summary"
                    value={this.state.summary}
                    placeholder="Project Task summary"
                    onChange={this.onChange}
                  />
                  {error.summary && (
                    <div className="invalid-feedback">{error.summary}</div>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Acceptance Criteria"
                    name="acceptanceCriteria"
                    value={this.state.acceptanceCriteria}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                  >
                    <option value="">Select Status</option>
                    <option value="TO_DO">TO DO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                  </select>
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
UpdateProjectTask.propTypes = {
  getProjectTaskById: PropTypes.func.isRequired,
  updateProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  projectTask: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.errors,
    projectTask: state.project_task.projectTask
  };
};
export default connect(
  mapStateToProps,
  { getProjectTaskById, updateProjectTask }
)(UpdateProjectTask);
