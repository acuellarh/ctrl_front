import React, { Component } from "react"
import ProjectForm from "./ProjectForm"

const api_url = `http://localhost:3000/api/v1/projects`

class ProjectList extends Component {
  constructor(props) {
      super(props)

      this.state = {
          items: []
          // items[0] == Project #1
          // items[0] == Project #2
      }
  }

  render() {
      return (
          <div>
              <ProjectForm/>
              <ul>
                  <li>Todo #1</li>
                  <li>Todo #2</li>
              </ul>
          </div>
      )
  }
}
export default ProjectList;