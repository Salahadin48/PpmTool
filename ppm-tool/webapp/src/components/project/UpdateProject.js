import React, {Component} from 'react';
import {createProject, getProject} from "../../actions/ProjectActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";

class UpdateProject extends Component {

    constructor() {
        super();
        this.state = {
            "id": 0,
            "projectName": "",
            "projectIdentifier": "",
            "projectDescription": "",
            "projectStartDate": "",
            "projectEndDate": ""
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getProject(id, this.props.history);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const {
            id,
            projectName,
            projectIdentifier,
            projectDescription,
            projectStartDate,
            projectEndDate
        } = nextProps.project;
        this.setState({
            id,
            projectName,
            projectIdentifier,
            projectDescription,
            projectStartDate,
            projectEndDate
        });
    }

    render() {
        const {
            id,
            projectName,
            projectIdentifier,
            projectDescription,
            projectStartDate,
            projectEndDate
        } = this.state;
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Project form</h5>
                            <hr/>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg "
                                       placeholder="Project Name"
                                       name="projectName"
                                       value={projectName}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                       placeholder="Unique Project ID"
                                       name="projectIdentifier"
                                       value={projectIdentifier}
                                       disabled/>
                            </div>

                            <div className="form-group">
                                <textarea className="form-control form-control-lg"
                                          placeholder="Project Description"
                                          name="projectDescription"
                                          value={projectDescription}/>
                            </div>
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg"
                                       name="projectStartDate"
                                       value={projectStartDate}/>
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg"
                                       name="projectEndDate"
                                       value={projectEndDate}/>
                            </div>

                            <input type="submit" className="btn btn-primary btn-block mt-4"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UpdateProject.propTypes = {
    getProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    
}

const mapStateToProps = state => ({
    project: state.project.project
})


export default connect(
    mapStateToProps,
    {getProject, createProject})(UpdateProject);
