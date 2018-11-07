import React, { Component } from 'react';
import axios from 'axios';

import HeaderInfo from './components/Header/HeaderInfo';
import Header from './components/Header/Header';
import RigListContainer from './components/RigListContainer/RigListContainer';
import './App.css';

const urlForMiningInfo = '/api/rigInfo';

export default class App extends Component {
  state = {
    title : 'HashiBoi App',
    rigInfo : [],
    rigTotals : {} 
  }; 

  getMiningData = async url => {
    try {
      const response = await axios.get(url);
      const { rigInfoArray, rigTotals } = response.data;
      this.setState({rigInfo : rigInfoArray, rigTotals: rigTotals})   
    } catch (error) {
      console.log(error);
    };
  };  

  componentDidMount() {
    console.log('app did mount fetching rig data');
    this.getMiningData(urlForMiningInfo);
    setInterval(this.getMiningData(urlForMiningInfo), 30 * 1000);
  } 

  render() {
    const { title, rigInfo, rigTotals } = this.state;

    return (
      <div className='App'>
        <Header title={ title } />
        <HeaderInfo totals={ rigTotals } />
        <RigListContainer rigInfo={ rigInfo } />
      </div>
    );
  };
};