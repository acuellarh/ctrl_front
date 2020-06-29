import React, { Component } from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


class ProjectForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            api_url: props.api_url,
            title: "", 
            user_id: ""  //provitional use, while the authentication is configured       
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleProjectChange = this.handleProjectChange.bind(this);        
        this.handleUserIdChange = this.handleUserIdChange.bind(this); // provitional use, while the authentication is configured  
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
        this.setState({
            title: "",
            user_id: ""
        })    
    }

    handleProjectChange (event) {
        this.setState({
            title: event.target.value            
        })
    }

    handleUserIdChange (event) {
        this.setState({
            user_id: event.target.value            
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
                value={this.state.title}
                onChange={this.handleProjectChange}/>

                {/* provitional use, while the authentication is configured  */}
                <TextField
                id="user_id_input"
                label="Ingrese el número 1, corresponde al usuario 1"
                variant="outlined"
                type="number"
                name="project[user_id]"
                value={this.state.user_id}
                onChange={this.handleUserIdChange}
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