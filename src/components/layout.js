import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './navbar'
import Footer from './footer'
import { MDBBox } from 'mdbreact'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <MDBBox display="flex" className="layout-wrapper">
      <Navbar />
      <MDBBox className="main-content">{children}</MDBBox>
      <Footer />
    </MDBBox>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
