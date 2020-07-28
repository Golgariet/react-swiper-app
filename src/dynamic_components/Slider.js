import React, { Component } from "react";
import "./slider.scss";
import i1 from "./assets/game-1.jpg";
import i2 from "./assets/game-2.jpg";
import i3 from "./assets/game-3.jpeg";
import i4 from "./assets/game-4.jpg";
import i5 from "./assets/game-5.jpeg";

const IMG_DATA = [i1, i2, i3, i4, i5];

let lastPos = 0;
let currentPos = 0;

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      activeIndex: true,
      checked: true,
    };

    this.goToRight = this.goToRight.bind(this);
    this.goToLeft = this.goToLeft.bind(this);

    this.goToRightInfinite = this.goToRightInfinite.bind(this);
    this.goToLeftInfinite = this.goToLeftInfinite.bind(this);

    this.goRightFn = this.goRightFn.bind(this);
    this.goLeftFn = this.goLeftFn.bind(this);

    this.dotHolder = this.dotHolder.bind(this);
  }

  goToRightInfinite() {
    const indexLast = IMG_DATA.length - 1;
    const { currentImageIndex } = this.state;
    const indexReset = currentImageIndex === indexLast;
    const index = indexReset ? 0 : currentImageIndex + 1;

    this.setState({ currentImageIndex: index });
  }

  goToLeftInfinite() {
    const indexLast = IMG_DATA.length - 1;
    const { currentImageIndex } = this.state;
    const indexReset = currentImageIndex === 0;
    const index = indexReset ? indexLast : currentImageIndex - 1;

    this.setState({ currentImageIndex: index });
  }

  goToRight() {
    const { currentImageIndex } = this.state;
    const index =
      currentImageIndex < IMG_DATA.length - 1
        ? currentImageIndex + 1
        : IMG_DATA.length - 1;

    this.setState({ currentImageIndex: index, activeIndex: true });
  }

  goToLeft() {
    const { currentImageIndex } = this.state;
    const index = currentImageIndex ? currentImageIndex - 1 : 0;

    this.setState({ currentImageIndex: index, activeIndex: false });
  }

  dotHolder(curIndex, index) {
    let nextDot = curIndex < index;

    this.setState({
      currentImageIndex: index,
      activeIndex: nextDot,
    });
  }

  setChecked(e) {
    this.setState({ checked: e.target.checked });
  }

  goRightFn() {
    if (this.state.checked) {
      return this.goToRight();
    }

    return this.goToRightInfinite();
  }

  goLeftFn() {
    if (this.state.checked) {
      return this.goToLeft();
    }

    return this.goToLeftInfinite();
  }

  mouseSwipe = (e) => {
    e.persist();
    let type = e.type.toLowerCase();
    if (type === "dragstart") {
      lastPos = e.clientX;
    } else {
      if (lastPos === 0 || e.clientX === 0 || lastPos === e.clientX) {
        return;
      }
      e.clientX > lastPos ? this.goRightFn() : this.goLeftFn();
    }
  };

  touchSwipe = (e) => {
    e.persist();
    let type = e.type.toLowerCase();

    if (type === "touchstart") {
      lastPos = e.touches[0].clientX;
    }

    if (type === "touchmove") {
      currentPos = e.touches[0].clientX;
    }

    if (type === "touchend") {
      if (lastPos === 0 || currentPos === 0 || lastPos === currentPos) {
        return;
      }
      currentPos > lastPos ? this.goRightFn() : this.goLeftFn();
    }
  };

  render() {
    let src = IMG_DATA[this.state.currentImageIndex];

    return (
      <div className="slide">
        <label className="switch__checkbox" htmlFor="checkbox">
          <input
            id="checkbox"
            className="checked"
            checked={this.state.checked}
            type="checkbox"
            onChange={(e) => this.setChecked(e)}
          />
          <div className="switcher round" />
        </label>

        <button
          className="slide__button slide__button--left"
          direction="left"
          onClick={() => this.goLeftFn()}
        >
          <span />
        </button>

        <div className="row">
          <img
            src={src}
            alt="images"
            onTouchStart={(e) => this.touchSwipe(e)}
            onTouchMove={(e) => this.touchSwipe(e)}
            onTouchEnd={(e) => this.touchSwipe(e)}
            onDragStart={(e) => this.mouseSwipe(e)}
            onDragEnd={(e) => this.mouseSwipe(e)}
            className="slide__image"
          />
        </div>

        <button
          className="slide__button slide__button--right"
          direction="right"
          onClick={() => this.goRightFn()}
        >
          <span />
        </button>

        <div className="slide__dots">
          <Dots
            current={this.state.currentImageIndex}
            images={this.state.images}
            changeSlide={this.dotHolder}
          />
        </div>
      </div>
    );
  }
}

class Dots extends Component {
  render() {
    let current = this.props.current;
    let images = IMG_DATA.map((element, index) => {
      let toggle = index === current ? "active" : "";
      return (
        <li key={index}>
          <button
            className={toggle}
            onClick={() => this.props.changeSlide(current, index)}
          ></button>
        </li>
      );
    });

    return <ul>{images}</ul>;
  }
}

export default Slider;
