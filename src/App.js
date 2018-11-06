import React, { Component } from 'react';
import axios from 'axios';

import HeaderInfo from './components/Header/HeaderInfo';
import Header from './components/Header/Header';
import RigListContainer from './components/RigListContainer/RigListContainer';
import './App.css';

const urlForMiningInfo = 'http://192.168.1.66:3004/api/rigInfo';

export default class App extends Component {
  state = {
    title : 'HashiBoi App',
    rigInfo : [],
    rigTotals : {} 
  }; 

  getMiningData = async url => {
    try {
      const response = await axios.get(url);
      const { rigInfo, rigTotals } = response.data;
      console.log(rigInfo);
      this.setState({rigInfo : rigInfo, totals: rigTotals})   
    } catch (error) {
      console.log(error);
    };
  };  

  componentDidMount() {
    console.log('app did mount fetching rig data');
    this.getMiningData(urlForMiningInfo);
  } 

  render() {
    const { title, rigInfo, totals } = this.state;

    return (
      <div className="App">
        <Header title={ title } />
        <HeaderInfo totals={ totals } />
        <RigListContainer rigInfo={ rigInfo } />
      </div>
    );
  };
};