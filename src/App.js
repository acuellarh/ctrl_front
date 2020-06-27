import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './views/Home';
import SignIn from "./views/Registration/SignIn";
import SignOut from "./views/Registration/SignOut";


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign_in" component={SignIn} /> 
      <Route exact path="/sign_out" component={SignOut} />
    </Switch>
  </BrowserRouter>
);

export default App;




