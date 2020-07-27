import React, { Component } from "react";
import user1 from "./img/user-1.jpg";
import user2 from "./img/user-2.jpg";
import user3 from "./img/user-3.jpg";
import user4 from "./img/user-4.jpg";
import user5 from "./img/user-5.jpg";
import user6 from "./img/user-6.jpg";
import Slider from "../dynamic_components/Slider";

import { ReactComponent as Onedrive } from "./img/SVG/onedrive.svg";
import { ReactComponent as Github } from "./img/SVG/github.svg";
import { ReactComponent as GoogleDrive } from "./img/SVG/google-drive.svg";
import { ReactComponent as LocationPin } from "./img/SVG/location-pin.svg";

class Main extends Component {
  render() {
    return (
      <main className="jira-view">
        <div className="gallery">
          <Slider />
        </div>

        <div className="overview">
          <h1 className="overview__heading">REACT SLIDER PROJECT</h1>

          <div className="overview__progs">
            <div className="overview__icon-prog">
              <Github className="GithubComponent" />
            </div>
            <div className="overview__icon-prog">
              <GoogleDrive className="GoogleDriveComponent" />
            </div>
            <div className="overview__icon-prog">
              <Onedrive className="OnedriveComponent" />
            </div>
          </div>

          <div className="overview__location">
            <svg className="overview__icon-location">
              <LocationPin className="LocationPinComponent" />
            </svg>
            <button className="btn-inline">Riga, Latvia</button>
          </div>

          <div className="overview__rating">
            <div className="overview__rating-average">7.8</div>
            <div className="overview__rating-count">429 votes</div>
          </div>
        </div>

        <div className="detail">
          <div className="description">
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              auctor, orci in egestas elementum, ligula quam porttitor nisl, ut
              pharetra leo diam ultrices nunc.
            </p>
            <p className="paragraph">
              Auctor, orci in egestas elementum, ligula quam porttitor nisl, ut
              pharetra leo diam ultrices nunc.
            </p>
            <ul className="list">
              <li className="list__item">Contextual Menu Sections</li>
              <li className="list__item">GSA Requirements</li>
              <li className="list__item">Settings Configuration</li>
              <li className="list__item">Content Design Review</li>
              <li className="list__item">User Management</li>
              <li className="list__item">Performance Upgrade</li>
              <li className="list__item">JSON data required</li>
              <li className="list__item">Better Pointers</li>
            </ul>
            <div className="recommend">
              <p className="recommend__count">
                Andrew and 3 other Team members approved this.
              </p>
              <div className="recommend__friends">
                <img src={user3} alt="Friend1" className="recommend__photo" />
                <img src={user4} alt="Friend2" className="recommend__photo" />
                <img src={user5} alt="Friend3" className="recommend__photo" />
                <img src={user6} alt="Friend4" className="recommend__photo" />
              </div>
            </div>
          </div>

          <div className="user-reviews">
            <figure className="review">
              <blockquote className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi, totam, itaque officia ex.
              </blockquote>
              <figcaption className="review__user">
                <img src={user1} alt="User1" className="review__photo" />
                <div className="review__user-box">
                  <p className="review__user-name">Anton Segel</p>
                  <p className="review__user-date">March 27th, 2020</p>
                </div>
                <div className="review__rating">8.0</div>
              </figcaption>
            </figure>

            <figure className="review">
              <blockquote className="review__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi.
              </blockquote>
              <figcaption className="review__user">
                <img src={user2} alt="User2" className="review__photo" />
                <div className="review__user-box">
                  <p className="review__user-name">Anita Arken</p>
                  <p className="review__user-date">Nov 29th, 2020</p>
                </div>
                <div className="review__rating">7.3</div>
              </figcaption>
            </figure>

            <button className="btn-inline">
              Show all <span>&rarr;</span>
            </button>
          </div>
        </div>

        <div className="cta">
          <h2 className="cta__book-now">
            Reminder: 7 Days left for Project Release.
          </h2>
          <button className="btn">
            <span className="btn__visible">Submit</span>
            <span className="btn__invisible">Only 7 Days Left</span>
          </button>
        </div>
      </main>
    );
  }
}

export default Main;
