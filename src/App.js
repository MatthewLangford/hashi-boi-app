import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import RigListContainer from './components/RigListContainer/RigListContainer';
import './App.css';

const urlForMiningInfo = 'http://192.168.1.75:3000/api/miningStats';


export default class App extends Component {
  state = {
    headerName : 'HashiBoi App',
    rigArray : [],   
  }; 

  getMiningData = async url => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      this.setState({rigArray : data.rigArray})   
    } catch (error) {
      console.log(error);
    }
    };  

  componentDidMount() {
    console.log('app did mount fetching rig data');

    this.getMiningData(urlForMiningInfo);

    // axios.get(urlForMiningInfo)
    // .then( response => {
    //     this.setState({rigArray : response.data.rigArray})   
    // }).catch(error => {
    //   console.log(error);
    // });
  } 

  

  render() {
    const { headerName, rigArray } = this.state;

    return (
      <div className="App">
        <Header header={ headerName } />
        <RigListContainer rigArray={ rigArray } />
      </div>
    );
  }
}

