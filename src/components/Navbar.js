import React, { Component } from "react";
import { Navbar } from "flowbite-react";

export default class Nav extends Component {
  render() {
    return (
      <Navbar rounded>
          <Navbar.Brand href="https://flowbite-react.com">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" width={"80px"} />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar href="#">Home</Navbar>
            <Navbar href="#">About</Navbar>
            <Navbar href="#">Services</Navbar>
            <Navbar href="#">Pricing</Navbar>
            <Navbar href="#">Contact</Navbar>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}
