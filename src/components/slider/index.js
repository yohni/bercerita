import React, { Component } from "react";
import { ArrowRight, ArrowLeft } from "../icons";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0
    };
    this.sliderContainer = React.createRef();
  }

  prevSlide = () => this.setState({ slide: this.state.slide + 235 });

  nextSlide = () => {
    this.setState({ slide: this.state.slide - 235 });
    // console.log(this.state.slide)
  };

  render() {
    const slideVal = this.state.slide;
    let arrowR;
    let arrowL;

    if (slideVal < 0) {
      arrowL = (
        <div className="arrow l-arrow" onClick={this.prevSlide}>
          <ArrowLeft />
        </div>
      );
    } else {
      arrowL = <div className="arrow l-arrow"></div>;
    }

    if (((-1*slideVal)+688+235)<this.props.sum*235) {
      arrowR = (
        <div className="arrow r-arrow" onClick={this.nextSlide}>
          <ArrowRight />
        </div>
      );
    } else {
      arrowR = <div className="arrow r-arrow"></div>;
    }

    return (
      <div className="slider-wrapper">
        {arrowL}
        <div className="slider-container" ref={this.sliderContainer} >
          <div
            className="slider-clip"
            style={{ transform: `translateX(${this.state.slide}px)` }}
          >
            {this.props.children}
          </div>
        </div>
        {arrowR}
      </div>
    );
  }
}

export default Slider;
