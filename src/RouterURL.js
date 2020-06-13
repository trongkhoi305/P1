import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from'./components/Home';
import About from'./components/About';
import App from'./App';
import Gallery from'./components/Gallery';
import Project from'./components/Project';
import Contact from'./components/Contact';
import Introduce from'./components/Introduce';
import Login from'./components/Login';
class RouterURL extends React.Component {
	render() {
		return (
			<Router>
			<Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
          <Route path="/App">
            <App />
          </Route>
          <Route path="/Gallery">
          <Gallery />
          </Route>
           <Route path="/Contact">
          <Contact />
          </Route>
          <Route path="/Introduce">
          <Introduce />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
			</Router>
			
		);
	}
}
export default RouterURL;
