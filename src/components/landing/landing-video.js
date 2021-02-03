import React, { Component } from 'react'
import { MDBIcon, MDBAnimation, MDBBox } from 'mdbreact'
import { Link as ReactScrollLink } from 'react-scroll'

import Video from '../../images/index/landing-video-new-compressed.mp4'

import '../../styles/styles.css'

class LandingVideo extends Component {
  render() {
    return (
      <>
        <MDBBox
          tag="header"
          className={this.props.isMobile ? 'height-95-vh' : 'height-95-vh'}
        >
          <MDBBox className="overlay" />

          <MDBBox
            tag="video"
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <MDBBox tag="source" src={Video} type="video/mp4" />
          </MDBBox>
          <MDBBox class="container h-100">
            <MDBBox class="d-flex h-100 text-center align-items-end ">
              <MDBBox class="w-100 padding-bottom-200-px">
                <ReactScrollLink
                  activeClass="active"
                  to="intro-text"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <MDBAnimation type="pulse" infinite>
                    <MDBIcon
                      icon="chevron-circle-down"
                      size="4x"
                      className="pink-text-4"
                    ></MDBIcon>
                  </MDBAnimation>
                </ReactScrollLink>
              </MDBBox>
            </MDBBox>
          </MDBBox>
        </MDBBox>
      </>
    )
  }
}

export default LandingVideo
