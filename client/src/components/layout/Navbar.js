import React, { Component } from "react";
import logo from "../../img/logo_transparent.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm   mb-4">
        <div class="container">
          <a class="navbar-brand" href="landing.html">
            <img src={logo} width="400" height="100" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="mobile-nav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item" />
            </ul>

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  START
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/about">
                  ABOUT YOU
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="register.html">
                  YOUR PLAN
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="register.html">
                  READY!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
