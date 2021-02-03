import React, { Component } from 'react'
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBTypography,
  MDBBox,
} from 'mdbreact'

import './../styles/styles.css'

class ShopsComponent extends Component {
  state = {
    activeItem: '1',
  }

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      })
    }
  }

  render() {
    return (
      <MDBContainer>
        <MDBBox className="mb-5">
          <h2 className="h1-responsive font-weight-bold text-center mt-5 mb-2">
            Hot Zones
          </h2>
          <p className="lead grey-text text-center w-responsive mx-auto mt-5">
            Έλα κοντά μας και εμείς θα ικανοποιήσουμε τον ουρανίσκο σου. Στο
            υποσχόμαστε!
          </p>
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: '400px' }}
          >
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=10TaCWkRh2tW4SB8LeyJ8EcwpgUtQ-b4g&hl=el"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
        </MDBBox>

        <MDBRow className="mb-5">
          <MDBCol xs="12" md="6">
            <MDBCard className="my-2 pink lighten-5">
              <MDBCardBody>
                <MDBCardTitle>Πευκοχώρι </MDBCardTitle>
                <MDBCardText>
                  <MDBTypography>
                    <b>Διεύθυνση: </b>Περιμετρική Κασσάδρας, 630 85 Πευκοχώρι
                    Χαλκιδικής
                  </MDBTypography>
                  <MDBTypography>
                    <b>Τηλέφωνο καταστήματος: </b> 2374061612
                  </MDBTypography>
                  <MDBTypography>
                    <b>Ωράριο Λειτουργίας: </b> Καθημερινές: 19.00 - 23.00
                    Σάββατο & Κυριακή: 18.00 - 00.00
                  </MDBTypography>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol xs="12" md="6">
            <MDBCard className="my-2 light-blue lighten-5">
              <MDBCardBody>
                <MDBCardTitle>Πολύκαστρο </MDBCardTitle>
                <MDBCardText>
                  <MDBTypography>
                    <b>Διεύθυνση: </b>Μεγάλου Αλεξάνδρου 136, 612 00 Πολύκαστρο
                  </MDBTypography>
                  <MDBTypography>
                    <b>Τηλέφωνο καταστήματος: </b> 6987012116
                  </MDBTypography>
                  <MDBTypography>
                    <b>Ωράριο Λειτουργίας: </b> Καθημερινές: 11.00 - 23.00
                    Σάββατο & Κυριακή: 11.00 - 23.00
                  </MDBTypography>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol xs="12" md="6">
            <MDBCard className="my-2 light-blue lighten-5">
              <MDBCardBody>
                <MDBCardTitle>Αθήνα</MDBCardTitle>
                <MDBCardText>Σύντομα κοντά σας.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol xs="12" md="6">
            <MDBCard className="my-2 pink lighten-5">
              <MDBCardBody>
                <MDBCardTitle>Θεσσαλονίκη</MDBCardTitle>
                <MDBCardText>Σύντομα κοντά σας.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
export default ShopsComponent
