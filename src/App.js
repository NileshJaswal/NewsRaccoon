import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  c = 'nilesh';

  // d02a71aef6d04f52acbb31a9a3453c56 news api key
  render() {
    return (
      <div>
        <h1>Hello my first class based component {this.c}</h1>
      </div>
    )
  }
}


