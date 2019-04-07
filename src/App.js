import React, { Component } from 'react';
import './App.css';
import CreateSiteIndex from "./pages/CreateSiteIndex";
import Sites from "./pages/Sites";
import SiteDetails from "./pages/SiteDetails";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              {
                  <Switch>
                      <Route exact path="/" component={CreateSiteIndex} />
                      <Route  path="/sites" component={Sites} />
                      <Route path="/details/:id" component={SiteDetails} />
                  </Switch>
              }
          </Router>
      </div>
    );
  }
}

export default App;
