import "./App.scss";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  // d02a71aef6d04f52acbb31a9a3453c56 news api keys
  render() {
    return (
      <div>
        <Navbar />
        <News newsheading="NewsRaccoon Top Headlines!" />
      </div>
    );
  }
}
