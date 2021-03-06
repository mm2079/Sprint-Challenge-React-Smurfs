import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
    this.setSmurfsState = this.setSmurfsState.bind( this );
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount()
  {
    axios
      .get( "http://localhost:3333/smurfs" )
      .then( response => this.setState( { smurfs: response.data } ) )
      .catch( error => console.log( error ) ); 
  }

  setSmurfsState( data )
  {
    this.setState( { smurfs: data } );
  }

  render() {
    return (
      <div className="App">
        <NavLink to = "/">Home</NavLink>
        <NavLink to = "/smurf-form"> Add Smurf</NavLink>
        <Route exact path = "/" render = { () => <Smurfs smurfs = { this.state.smurfs }/> }/>
        <Route path = "/smurf-form" render = { () => <SmurfForm setSmurfsState = { this.setSmurfsState }/> } />
        {/* <SmurfForm setSmurfsState = { this.setSmurfsState }/>
        <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
