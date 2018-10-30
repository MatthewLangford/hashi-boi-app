import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import RigListContainer from './components/RigListContainer/RigListContainer';


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      headerName : 'HashiBoi App',
      rigArray : [],   
    }; 
  }

  componentDidMount() {
    console.log('app did mount fetching rig data');
    axios.get('http://192.168.1.62:3000/api/miningStats')
    .then( response => {
        console.log('this is the result from the request: ' + response.data.rigArray)
        this.setState({rigArray : response.data.rigArray})   
    }).catch(error => {
      console.log(error);
    });
}

  render() {
    const { headerName, rigArray } = this.state;
    console.log( 'this is the header: ' + headerName + ' ' + 'this is the rigArray: ' + rigArray)
    return (
      
      <div className="App">
        <Header header={ headerName } />
        <RigListContainer rigArray={ rigArray }/>
      </div>
    );
  }
}

