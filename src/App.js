import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import RigListContainer from './components/RigListContainer/RigListContainer';
import './App.css';

const urlForMiningInfo = 'http://192.168.1.75:3000/api/rigInfo';


export default class App extends Component {
  state = {
    headerName : 'HashiBoi App',
    rigInfo : [],   
  }; 

  getMiningData = async url => {
    try {
      const response = await axios.get(url);
      const { rigInfo } = response.data;
      console.log(rigInfo);
      this.setState({rigInfo : rigInfo})   
    } catch (error) {
      console.log(error);
    };
  };  

  componentDidMount() {
    console.log('app did mount fetching rig data');
    this.getMiningData(urlForMiningInfo);
  } 

  

  render() {
    const { headerName, rigInfo } = this.state;

    return (
      <div className="App">
        <Header header={ headerName } />
        <RigListContainer rigInfo={ rigInfo } />
      </div>
    );
  }
}

