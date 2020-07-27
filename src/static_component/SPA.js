import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "./sass/main.scss";

class SPA extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}

export default SPA;
