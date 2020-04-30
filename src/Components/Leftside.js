import React, { Component } from "react";

class Leftside extends Component {
  render() {
    return (
      <div className="col-sm-2 sidenav" id="leftSideContent">
        <p>
          <a href="#">Link</a>
        </p>
        <p>
          <a href="#">Link</a>
        </p>
        <p>
          <a href="#">Link</a>
        </p>
        <p>
          <a href="#">Link</a>
        </p>
        <p>
          <a href="#">Link</a>
        </p>
        <div className="well">
          <p>ADS</p>
        </div>
        <div className="well">
          <p>ADS</p>
        </div>
      </div>
    );
  }
}

export default Leftside;
