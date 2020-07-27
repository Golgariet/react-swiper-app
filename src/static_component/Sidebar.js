import React, { Component } from "react";
import { ReactComponent as ClassicPC } from "./img/SVG/flash.svg";
import { ReactComponent as Reports } from "./img/SVG/calendar.svg";
import { ReactComponent as Comp } from "./img/SVG/folder-images.svg";
import { ReactComponent as Addon } from "./img/SVG/suitcase.svg";

class Sidebar extends Component {
  render() {
    let url = "http://localhost:3000/";

    return (
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__item side-nav__item--active">
            <a href={url} className="side-nav__link">
              <div className="side-nav__icon">
                <ClassicPC className="ClassicPCComponent" />
              </div>
              <span>Releases</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href={url} className="side-nav__link">
              <div className="side-nav__icon">
                <Reports className="ReportsComponent" />
              </div>
              <span>Reports</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href={url} className="side-nav__link">
              <div className="side-nav__icon">
                <Comp className="CompComponent" />
              </div>
              <span>Components</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href={url} className="side-nav__link">
              <div className="side-nav__icon">
                <Addon className="AddonComponent" />
              </div>
              <span>Addons</span>
            </a>
          </li>
        </ul>

        <div className="legal">&copy; Antons Bibergals</div>
      </nav>
    );
  }
}

export default Sidebar;
