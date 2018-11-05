import React, { Component } from 'react';
import axios from 'axios';

import HeaderInfo from './components/Header/HeaderInfo';

import Header from './components/Header/Header';
import RigListContainer from './components/RigListContainer/RigListContainer';
import './App.css';

const urlForMiningInfo = 'http://192.168.1.66:8080/api/rigInfo';

export default class App extends Component {
  state = {
    title : 'HashiBoi App',
    rigInfo : [],
    rigTotals : {} 
  }; 

  getMiningData = async url => {
    try {
      // let totals = {
      //   acceptedShares : 0,
      //   rejectedShares : 0,
      //   hashrate : 0,
      //   invalidShares : 0
      // }
      const response = await axios.get(url);
      const { rigInfo, totals } = response.data;
      console.log(rigInfo);
      // rigInfo.forEach(val => {
      //   totals.acceptedShares += val.acceptedShares
      //   totals.rejectedShares += val.rejectedShares
      //   totals.invalidShares += val.invalidShares
      //   totals.hashrate += val.hashrate
      // });
      this.setState({rigInfo : rigInfo, rigTotals: totals})   
    } catch (error) {
      console.log(error);
    };
  };  

  componentDidMount() {
    console.log('app did mount fetching rig data');
    this.getMiningData(urlForMiningInfo);
  } 

  

  render() {
    const { title, rigInfo, rigTotals } = this.state;

    return (
      <div className="App">
        <Header title={ title } />
        <HeaderInfo totals={ rigTotals } />
        <RigListContainer rigInfo={ rigInfo } />
      </div>
    );
  };
};

