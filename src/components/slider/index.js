import React, { Component } from "react";
import { ArrowRight, ArrowLeft } from "../icons";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0
    };
  }

  prevSlide = () => this.setState({ slide: this.state.slide + 235.82 });

  nextSlide = () => {
    this.setState({ slide: this.state.slide - 235.82 });
  };

  render() {
    const slideVal = this.state.slide;
    let arrowR;
    let arrowL;

    if (slideVal < 0 ) {
      arrowL = (
        <div className="arrow l-arrow" onClick={this.prevSlide}>
          <ArrowLeft />
        </div>
      );
    }

    if (slideVal < this.props.sum * 235.82) {
      arrowR = (
        <div className="arrow r-arrow" onClick={this.nextSlide}>
          <ArrowRight />
        </div>
      );
    }

    return (
      <div className="slider-wrapper">
        {arrowL}
        <div
          className="slider-container"
          style={{ transform: `translateX(${this.state.slide}px)` }}
        >
          {this.props.children}
        </div>
        {arrowR}
      </div>
    );
  }
}

export default Slider;
