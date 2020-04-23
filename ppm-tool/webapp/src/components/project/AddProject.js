import React, {Component} from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {createProject} from "../../actions/ProjectActions"
import classnames from "classnames"

class AddProject extends Component {

    constructor() {
        super();
        this.state = {
            "projectName": "",
            "projectIdentifier": "",
            "projectDescription": "",
            "projectStartDate": "",
            "projectEndDate": "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // life cycle hooks
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const newProject = {
            "projectName": this.state.projectName,
            "projectIdentifier": this.state.projectIdentifier,
            "projectDescription": this.state.projectDescription,
            "projectStartDate": this.state.projectStartDate,
            "projectEndDate": this.state.projectEndDate,
        }
        console.log(newProject);
        this.props.createProject(newProject, this.props.history)
    }

    render() {
        const {errors} = this.state;

        return (
            <div>
                <div className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Create Project form</h5>
                                <hr/>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text"
                                               className={classnames("form-control form-control-lg", {"is-invalid": errors.projectName})}
                                               placeholder="Project Name"
                                               name="projectName"
                                               value={this.state.projectName}
                                               onChange={this.onChange}/>
                                        {errors.projectName && (
                                            <div className="invalid-feedback">{errors.projectName}</div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                               className={classnames("form-control form-control-lg", {"is-invalid": errors.projectIdentifier})}
                                               placeholder="Unique Project ID"
                                               name="projectIdentifier"
                                               value={this.state.projectIdentifier}
                                               onChange={this.onChange}/>
                                        {errors.projectIdentifier && (
                                            <div className="invalid-feedback">{errors.projectIdentifier}</div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <textarea
                                            className={classnames("form-control form-control-lg", {"is-invalid": errors.projectDescription})}
                                            placeholder="Project Description"
                                            name="projectDescription"
                                            value={this.state.projectDescription}
                                            onChange={this.onChange}/>
                                        {errors.projectDescription && (
                                            <div className="invalid-feedback">{errors.projectDescription}</div>
                                        )}
                                    </div>
                                    <h6>Start Date</h6>
                                    <div className="form-group">
                                        <input type="date"
                                               className={classnames("form-control form-control-lg", {"is-invalid": errors.projectStartDate})}
                                               name="projectStartDate"
                                               value={this.state.projectStartDate}
                                               onChange={this.onChange}/>
                                        {errors.projectStartDate && (
                                            <div className="invalid-feedback">{errors.projectStartDate}</div>
                                        )}
                                    </div>
                                    <h6>Estimated End Date</h6>
                                    <div className="form-group">
                                        <input type="date"
                                               className={classnames("form-control form-control-lg", {"is-invalid": errors.projectEndDate})}
                                               name="projectEndDate"
                                               value={this.state.projectEndDate}
                                               onChange={this.onChange}/>
                                        {errors.projectEndDate && (
                                            <div className="invalid-feedback">{errors.projectEndDate}</div>
                                        )}
                                    </div>

                                    <input type="submit" className="btn btn-primary btn-block mt-4"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddProject.protoTypes = {
    createProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapSateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapSateToProps,
    {createProject})(AddProject);
