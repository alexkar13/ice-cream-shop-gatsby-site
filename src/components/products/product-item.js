import React from 'react'
import { MDBContainer, MDBFooter } from 'mdbreact'
import Img from 'gatsby-image'
const ProductItem = props => {
  return (
    <div
      className={`col-lg-4 col-sm-6 mb-4 mb-lg-0 border-radius-36px portfolio-hover-${props.color}`}
      onClick={() => {
        props.onModalOpen()
      }}
    >
      <div className="portfolio-item">
        <div className="portfolio-link" data-toggle="modal">
          <div className="portfolio-hover">
            {/* <div class="portfolio-hover-content">
              <i class={`fas fa-${props.hoverIconName} fa-4x`} />
            </div> */}
          </div>
          <div style={{ height: '200px' }}>
            <Img
              fluid={props.img}
              alt={props.altText}
              className="w-100 h-100"
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <div className={`portfolio-caption portfolio-hover-${props.color}`}>
          <div className="portfolio-caption-heading">{props.title}</div>
          <div className="portfolio-caption-subheading text-muted">
            {props.text}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
