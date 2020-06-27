import React, { Component } from "react"
import ProjectForm from "./ProjectForm"
import ProjectItem from "./ProjectItem"

const api_url = `http://localhost:3001/api/v1/projects`

class ProjectList extends Component {
	constructor(props) {
			super(props)

			this.state = {
					items: []
			}
			this.updateProjectList = this.updateProjectList.bind(this);
	}

	componentDidMount() {
			this.getProjects();
	} 

	getProjects() {
		fetch(api_url)
				.then(response => response.json())
				.then(response_items => {
						this.setState({
								items: response_items.reverse()
						})
				});
	}

	updateProjectList(item) {
		let _items = this.state.items
		_items.unshift(item)
		this.setState({
				items: _items
		})
  }
	
	render() {
		  console.log(this.state.items)
			return (
					<div>						
							<ProjectForm api_url={api_url} updateProjectList={this.updateProjectList}/> 
							<ul id="project_list">
								{this.state.items.map((item) => (								
									<ProjectItem key={item.id} item={item}/>								
								))}						
							</ul>
					</div>
			)
	}
}
export default ProjectList;