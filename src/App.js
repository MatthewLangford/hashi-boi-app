import React, { Component } from 'react';
import './App.css';
import RigListComponent from './components/rigListComponent';
import Header from './components/Header/Header';
const headerName = 'HashiBoi App';


class App extends Component {
  
  render() {
    

    return (
      <div className="App">
        <Header header={ headerName } />
        <RigListComponent />
      </div>
    );
  }
}

export default App;
