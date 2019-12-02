import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';

class App extends React.Component {
  render() {
      return (
          <BrowserRouter>
          <div className="App">
              <NavBar/>
              <Switch>
                  <Route exact path='/' component={Dashboard}/>
              </Switch>
          </div>
          </BrowserRouter>
      );
  }
}

export default App;
