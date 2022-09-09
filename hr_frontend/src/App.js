import React, { Component ,useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import NavBar from './components/Navbar';

import Formpage from './components/Formpage';
import Adminpage from './components/Adminpage';
import Successpage from './components/Successpage';



import axios from "axios";



class App extends Component {
 
    
  
  render() {
  

    return (
        <div className="App">
      
      
        <div>
          <Router>
          <NavBar />
            <Switch>
            <Route exact path="/" component={Formpage} />
            <Route exact path="/admin" component={Adminpage} />
            <Route exact path="/success" component={Successpage} />

            

              
            
            </Switch>
          </Router>
        </div>
    </div>


    );
  }
}

export default App;