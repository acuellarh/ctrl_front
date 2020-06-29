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
            .then(response => this.props.updateTaskList(response))
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

                <input
                id="task_input"
                placeholder="Type the Task"            
                type="text"
                name="task[description]"                
                onChange={this.handleTaskChange}/>

                <input
                id="priority_id_input"
                placeholder="Type the priority_id"                
                type="number"
                name="task[priority_id]"
                onChange={this.handleTaskChange}
                />

                <input
                id="date_input"
                placeholder="Type the deadline date"                
                type="date"
                name="task[deadline]"
                onChange={this.handleTaskChange}
                />

                <input
                id="project_id_input"
                placeholder="Type the project_id"                
                type="number"
                name="task[project_id]"
                onChange={this.handleTaskChange}
                />

                <button variant="contained"
                color="primary"
                type="submit">Add Task</button>


                </form>
            </div>
        )
    }
}
export default TaskForm;