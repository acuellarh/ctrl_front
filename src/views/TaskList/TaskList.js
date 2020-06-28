import React, { Component } from "react"
import TaskForm from "./TaskForm"
// import TaskTable from "./TaskTable"


const api_task_url = `http://localhost:3001/api/v1/tasks`

class TaskList extends Component {
	constructor(props) {
			super(props)

			this.state = {
        project_id: props.project_id,
				tasks: []
			}
			this.updateTaskList = this.updateTaskList.bind(this);
	}

	componentDidMount() {
			this.getTasks();
	} 

	getTasks() {
		fetch(api_task_url)
				.then(response => response.json())
				.then(response_items => {
						this.setState({
								tasks: response_items.reverse()
						})
				});
	}

	updateTaskList(task) {
		let _items = this.state.tasks
		_items.unshift(task)
		this.setState({
				tasks: _items
		})
  }
	
	render() {
		console.log(this.state.tasks)
		return (
			<div>
				{this.state.tasks.filter(task => task.project_id === this.state.project_id).map(filteredTask => (
						<li>
							{filteredTask.description}
						</li>
					))}
			</div>
		)
	}
}
export default TaskList;