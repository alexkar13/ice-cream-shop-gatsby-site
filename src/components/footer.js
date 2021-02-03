import React from 'react'
import { MDBContainer, MDBFooter } from 'mdbreact'

const Footer = () => {
  return (
    <MDBFooter color="grey lighten-5" className="font-small pt-0 footer">
      <div className="footer-copyright text-center py-3">
        <MDBContainer className="text-dark" fluid>
          &copy; Rolly Rolly | Copyright {new Date().getFullYear()}. All Rights
          Reserved
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
