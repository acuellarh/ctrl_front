import React from 'react';
import './App.css';
import ProjectList from './ProjectList/ProjectList'
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Typography variant="h1">Todo Projects</Typography>
        <hr/>        
        <ProjectList/>
      </header>
    </div>
  );
}

export default App;
