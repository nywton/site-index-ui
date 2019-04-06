import React, { Component } from 'react';
import './App.css';
import Sites from './pages/Sites'
import CreateSiteIndex from "./pages/CreateSiteIndex";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateSiteIndex/>
      </div>
    );
  }
}

export default App;
