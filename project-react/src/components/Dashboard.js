import React, { Component } from "react";
import ProjectItem from "./project/ProjectItem";
import CreateProjectButton from "./project/CreateProjectButton";
import { connect } from "react-redux";
import { getAllProjects } from "../actions/ProjectActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllProjects();
  }
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              {
                // <!-- Project Item Component -->
              }
              {this.props.projects.projects.map(project => (
                <ProjectItem project={project} key={project.id} />
              ))}
              {
                // <!-- End of Project Item Component -->
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

export default connect(
  mapStateToProps,
  { getAllProjects }
)(Dashboard);
