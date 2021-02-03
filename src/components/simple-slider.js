import React, { Component } from 'react'
import { MDBIcon } from 'mdbreact'
import Img from 'gatsby-image'
import { StaticQuery } from 'gatsby'

import '../styles/simple-slider.css'
import '../styles/styles.css'

class SimpleSlider extends Component {
  state = {
    slideIndex: 1,
  }

  // Next/previous controls
  nextImage = () => {
    this.setState({
      slideIndex: 2,
    })
  }

  previousImage = () => {
    this.setState({
      slideIndex: 1,
    })
  }

  render() {
    return (
      <div className="h-100 overflow-hidden pink lighten-5">
        <div
          className={`slideshow-container ${
            this.state.slideIndex === 1 ? 'align-center' : 'd-none'
          }`}
        >
          <MDBIcon
            size="2x"
            icon="times"
            onClick={this.props.onClose}
            className="modal-close-icon"
          />
          <div className="w-100 position-relative">
            <Img
              fluid={this.props.data.menuIceCream1.childImageSharp.fluid}
              alt="Μενου παγωτά σελίδα 1"
              className="w-100"
            />
            {/* Arrow Buttons */}
            <div className="next" onClick={this.nextImage}>
              &#10095;
            </div>
          </div>

          {/* Balls under image */}
          <div className="text-align-center align-self-center m-2">
            <span
              className={`dot ${
                this.state.slideIndex == 1 ? 'teal lighten-4' : ''
              }`}
              onClick={this.previousImage}
            />
            <span
              className={`dot ${
                this.state.slideIndex == 2 ? 'teal lighten-4' : ''
              }`}
              onClick={this.nextImage}
            />
          </div>
        </div>

        <div
          className={`slideshow-container ${
            this.state.slideIndex === 2 ? 'align-center' : 'd-none'
          }`}
        >
          <MDBIcon
            size="2x"
            icon="times"
            onClick={this.props.onClose}
            className="modal-close-icon"
          />
          <div className="w-100 position-relative">
            <Img
              fluid={this.props.data.menuIceCream2.childImageSharp.fluid}
              alt="Μενου παγωτά σελίδα 2"
              className="w-100"
            />

            {/* Arrow Buttons */}

            <div className="prev" onClick={this.previousImage}>
              &#10094;
            </div>
          </div>

          {/* Balls under image */}
          <div className="text-align-center align-self-center m-2">
            <span
              className={`dot ${
                this.state.slideIndex == 1 ? 'teal lighten-4' : ''
              }`}
              onClick={this.previousImage}
            />
            <span
              className={`dot ${
                this.state.slideIndex == 2 ? 'teal lighten-4' : ''
              }`}
              onClick={this.nextImage}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleSlider
