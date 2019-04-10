import React, { Component } from "react";
import logo from "../../img/full_logo.png";
import { Link } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div className="landing">
        <div className="image">
          <img src={logo} width="700" height="850" alt="" />
        </div>
        <h1 className="htext">WELCOME YOUR TRIP AROUND SRI LANKA WITH US</h1>
        <div>
          <Link to="/about" className="btn btn-xlarge btn-lg btn-info mr-2">
            LET'S GET STARTED!
          </Link>
        </div>
      </div>
    );
  }
}
export default Welcome;
