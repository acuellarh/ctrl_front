import React, { Component } from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


class ProjectForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            api_url: props.api_url,
            title: "",           
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.formSubmit(event.target);
    }


    async formSubmit(formData) {
        var data = new FormData(formData);
        await fetch(this.state.api_url, {
            method: "POST",
            mode: "cors",
            body: data
        }).then(response => response.json())
            .then(response => this.props.updateProjectList(response))
    }

    handleProjectChange (event) {
        this.setState({
            title: event.target.value            
        })
    }

    render() {
        return (
            <div>
                <form
                onSubmit={this.handleSubmit}
                id= "project_form"
                autoComplete="off">

                <TextField
                id="project_input"
                label="Type the Project Title"
                variant="outlined"
                type="text"
                name="project[title]"
                onChange={this.handleProjectChange}/>

                <TextField
                id="user_id_input"
                label="Type the user_id, just for test"
                variant="outlined"
                type="number"
                name="project[user_id]"
                onChange={this.handleProjectChange}
                />

                <Button variant="contained"
                color="primary"
                type="submit">Add Project</Button>


                </form>
            </div>
        )
    }
}
export default ProjectForm;