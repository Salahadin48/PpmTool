import React, {Component} from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {createProject} from "../../actions/ProjectActions"

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
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event){
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
                                        <input type="text" className="form-control form-control-lg "
                                               placeholder="Project Name"
                                               name="projectName"
                                               value={this.state.projectName}
                                               onChange={this.onChange}/>
                                        <p>{errors.projectName}</p>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg"
                                               placeholder="Unique Project ID"
                                               name="projectIdentifier"
                                               value={this.state.projectIdentifier}
                                               onChange={this.onChange}/>
                                        <p>{errors.projectIdentifier}</p>
                                    </div>

                                    <div className="form-group">
                                        <textarea className="form-control form-control-lg"
                                                  placeholder="Project Description"
                                                  name="projectDescription"
                                                  value={this.state.projectDescription}
                                                  onChange={this.onChange}></textarea>
                                        <p>{errors.projectDescription}</p>
                                    </div>
                                    <h6>Start Date</h6>
                                    <div className="form-group">
                                        <input type="date" className="form-control form-control-lg"
                                               name="projectStartDate"
                                               value={this.state.projectStartDate}
                                               onChange={this.onChange}/>
                                        <p>{errors.projectStartDate}</p>
                                    </div>
                                    <h6>Estimated End Date</h6>
                                    <div className="form-group">
                                        <input type="date" className="form-control form-control-lg"
                                               name="projectEndDate"
                                               value={this.state.projectEndDate}
                                               onChange={this.onChange}/>
                                        <p>{errors.projectEndDate}</p>
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
