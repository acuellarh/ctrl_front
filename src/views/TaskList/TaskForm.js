import React, { Component } from "react"


class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            api_task_url: props.api_task_url,
            description: "", 
            priority_id: "",
            deadline: "",          
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateLineChange = this.handleDateLineChange.bind(this);
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
        this.setState({
            description: "", 
            priority: "",
            deadline: ""
        })    

    }

    handleDescriptionChange (event) {
        this.setState({
            description: event.target.value            
        })
    }

    handlePriorityChange (event) {
        this.setState({
            priority_id: event.target.value            
        })
    }

    handleDateLineChange (event) {
        this.setState({
            dateline: event.target.value            
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
                onChange={this.handleDescriptionChange}/>

                <input
                id="priority_id_input"
                placeholder="Type the priority_id"                
                type="number"
                name="task[priority_id]"
                onChange={this.handlePriorityChange}
                />

                <input
                id="date_input"
                placeholder="Type the deadline date"                
                type="date"
                name="task[deadline]"
                onChange={this.handleDateLineChange}
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