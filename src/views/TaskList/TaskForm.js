import React, { Component } from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            api_task_url: props.api_task_url,
            description: "",           
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.formSubmit(event.target);
    }

    async formSubmit(formData) {
        var data = new FormData(formData);
        await fetch(this.state.api_task_url, {
            method: "POST",
            mode: "cors",
            body: data
        }).then(response => response.json())
            .then(response => this.props.updateProjectList(response))
    }

    handleTaskChange (event) {
        this.setState({
            description: event.target.value            
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
                name="task[description]"
                onChange={this.handleTaskChange}/>

                <TextField
                id="user_id_input"
                label="Type the user_id, just for test"
                variant="outlined"
                type="number"
                name="task[priority_id]"
                onChange={this.handleTaskChange}
                />

                <Button variant="contained"
                color="primary"
                type="submit">Add Task</Button>


                </form>
            </div>
        )
    }
}
export default TaskForm;