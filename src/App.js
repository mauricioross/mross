import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './pages/Projects/Projects';
import Home from './pages/Home/Home';
class App extends Component{
  render(){
    return(
      <div>
        {/* <Header></Header> */}
        <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
        {/* <Footer></Footer> */}
      </div>
    )
  }
}

export default App;
