import React, { Component } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBBox,
} from 'mdbreact'
import { Link } from 'gatsby'
import CustomNavLink from './customLink'
import Logo from '../images/rolly-rolly-logo.png'

import '../styles/styles.css'

class NavbarComponent extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <MDBNavbar color="light-blue lighten-4" light expand="md">
        <MDBContainer className="container-nav">
          {/* <Logo  /> */}
          <Link to="/" className="navbar-brand">
            <MDBBox tag="img" className="logo" src={Logo}></MDBBox>
          </Link>
          <MDBNavbarToggler
            name="navbar-toggler"
            onClick={this.toggleCollapse}
          />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <CustomNavLink className="font-900" to="/">
                Αρχική
              </CustomNavLink>
              <CustomNavLink to="/products/">Προϊόντα</CustomNavLink>
              <CustomNavLink to="/shops">Hot Zones</CustomNavLink>
              <CustomNavLink to="/about">About us</CustomNavLink>
              <CustomNavLink to="/franchise">Franchise</CustomNavLink>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <div className="d-flex align-items-center">
                <CustomNavLink target to="https://www.facebook.com/rollyrolly.gr/">
                  <MDBIcon fab icon="facebook" className="ml-1" />
                </CustomNavLink>
                <CustomNavLink to="https://www.instagram.com/rollyrolly.gr/?hl=el">
                  <MDBIcon fab icon="instagram" className="ml-1" />
                </CustomNavLink>
                <CustomNavLink to="https://www.youtube.com/channel/UC6WuyZL5E8bSk6K8CIWtQGw">
                  <MDBIcon fab icon="youtube" className="ml-1" />
                </CustomNavLink>
              </div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    )
  }
}

export default NavbarComponent
