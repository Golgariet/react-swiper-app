import React, { Component } from "react";
import logo from "./img/logo.png";
import mainUser from "./img/user.jpg";
import { ReactComponent as MagnifyingGlass } from "./img/SVG/magnifying-glass.svg";
import { ReactComponent as Bookmark } from "./img/SVG/bookmark.svg";
import { ReactComponent as Chat } from "./img/SVG/chat.svg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="Scandi logo" className="logo" />

        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder=" Search Releases"
          ></input>
          <button className="search__button">
            <div className="search__icon">
              <MagnifyingGlass className="SearchComponent" />
            </div>
          </button>
        </form>

        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <div className="user-nav__icon">
              <Bookmark className="Bookmark" />
            </div>
            <span className="user-nav__notification">3</span>
          </div>
          <div className="user-nav__icon-box">
            <div className="user-nav__icon">
              <Chat />
            </div>
            <span className="user-nav__notification">24</span>
          </div>
          <div className="user-nav__user">
            <img src={mainUser} alt="user" className="user-nav__user-photo" />
            <span className="user-nav__user-name">Andris</span>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
