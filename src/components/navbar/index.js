import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../logo";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick = e => {
    e.preventDefault();
    this.setState({ menuOpen: !this.state.menuOpen });
    console.log(this.state.menuOpen);
  };

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="nav-list">
          <div className="hamburger" onClick={this.handleMenuClick}>
            <span className={`${this.state.menuOpen ? "lineTop" : ""}`}></span>
            <span className={`${this.state.menuOpen ? "lineMid" : ""}`}></span>
            <span className={`${this.state.menuOpen ? "lineBot" : ""}`}></span>
          </div>
          <ul
            className={`collapse ${this.state.menuOpen ? "is-expanded" : ""}`}
          >
            <li className="navlink">
              <a href="#meId">Tentang Aku</a>
            </li>
            <li className="navlink">
              <a href="#expId">Corat-Coret</a>
            </li>
            <li className="navlink">
              <a href="#contactId">Kontak</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
