import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      indx: 0,
    };
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleLeftClick() {
    console.log(this);
    this.setState((prevState) => ({
      indx: prevState.indx === 0 ? images.length - 1 : prevState.indx - 1,
    }));
  }

  handleRightClick() {
    this.setState((prevState) => ({
      indx: prevState.indx === images.length - 1 ? 0 : prevState.indx + 1,
    }));
  }

  render() {
    return (
      <>
        <div id="container">
          <div id="left" className="arrow" onClick={this.handleLeftClick}>
            <ArrowBackIosIcon />
          </div>

          <div id="image">
            <h3 id="title">{images[this.state.indx].subtitle}</h3>
            <div id="imgContainer">
              <img src={images[this.state.indx].img} alt="" className="img" />
            </div>

            <h5 id="subtitle">{images[this.state.indx].subtitle}</h5>
          </div>

          <div id="right" className="arrow" onClick={this.handleRightClick}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </>
    );
  }
}

export default Carousel;
