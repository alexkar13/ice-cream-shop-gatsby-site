import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
  MDBInput,
  MDBBtn,
} from 'mdbreact'
import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const AboutUsComponent = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <MDBContainer>
          <section className="mt-2 mb-3 p-3">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              Ποιοι είμαστε
            </h2>
            <p className="lead grey-text w-responsive text-center mx-auto mb-5">
              Η RollyRolly αποτελεί μία από τις πιο δυναμικές και ταχέως
              αναπτυσσόμενες εταιρείες Rolled Ice Cream στην Ελλάδα. Παρ’ όλα τα
              εμπόδια της σημερινής εποχής, η εταιρεία ξεκινώντας από ένα μικρό
              κατάστημα στη Χανιώτη Χαλκιδικής το 2018, έχει πλέον αναπτύξει τις
              υποδομές για να μπορέσει να επεκταθεί σε ολόκληρη την Ελλάδα, και
              αυτή είναι μόλις η αρχή. Οπλισμένοι με ένα φρέσκο, ανεπανάληπτο
              προϊόν και μια εναλλακτική διαδικασία παρασκευής του, είμαστε
              έτοιμοι να φέρουμε εις πέρας την αποστολή μας.
            </p>

            <MDBRow>
              <MDBCol md="4">
                <MDBRow className="my-2">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="flag-checkered"
                      size="2x"
                      className="teal-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Η αποστολή μας</h5>
                    <p className="grey-text">
                      Να φτάσουν σε κάθε γωνιά της Ελλάδας, οι αξίες που
                      πρεσβεύει και τα συναισθήματα που προκαλεί η Rolly Rolly,
                      που οδηγούν σε μια μαγευτική εμπειρία για όλους μας τους
                      επισκέπτες.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="my-2">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="chart-line"
                      size="2x"
                      className="teal-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Ανάπτυξη</h5>
                    <p className="grey-text">
                      Να δώσουμε τις πιο ανταγωνιστικές τιμές franchise στην
                      αγορά, όχι μόνο για την επέκταση της εταιρείας, αλλά
                      κυρίως για τη δημιουργία σταθερών σχέσεων εμπιστοσύνης και
                      συνεργασίας με όσους επιλέξουν να γίνουν μέλος της
                      οικογένειάς μας.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="my-2">
                  <MDBCol size="2">
                    <MDBIcon
                      icon="globe-europe"
                      size="2x"
                      className="teal-text"
                    />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Επέκτσαση</h5>
                    <p className="grey-text">
                      Να δημιουργήσουμε βάση δραστηριοτήτων στο Ηνωμένο Βασίλειο
                      και τη Γερμανία μέχρι το τέλος του 2023.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="4" className="text-name my-3">
                <Img
                  fluid={data.ananaGirl.childImageSharp.fluid}
                  alt="Κοπέλα με ανανά"
                />
              </MDBCol>
              <MDBCol md="4">
                <MDBRow className="my-2">
                  <MDBCol size="2">
                    <MDBIcon icon="eye" size="2x" className="pink-text-4" />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Το όραμα μας</h5>
                    <p className="grey-text">
                      Η εδραίωση της Rolly Rolly ως Νο 1 εταιρία rolled ice
                      cream στην Ελλάδα.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="my-2">
                  <MDBCol size="2">
                    <MDBIcon icon="users" size="2x" className="pink-text-4" />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">Η κοινότητα μας</h5>
                    <p className="grey-text">
                      Η δημιουργία θέσεων εργασίας, στις οποίες ο απασχολούμενος
                      εργάζεται σε ένα ευχάριστο περιβάλλον, όπου οι αξίες της
                      συνεργασίας και του σεβασμού διαδραματίζουν πρωταρχικό
                      ρόλο, εξελίσσεται διαρκώς με την υποστήριξη της καλύτερης
                      ομάδας και εξασκεί τη φαντασία και τη δημιουργικότητά του.
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="my-2">
                  <MDBCol size="2">
                    <MDBIcon icon="flask" size="2x" className="pink-text-4" />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold mb-3">
                      Προώθηση ελληνικών προϊόντων
                    </h5>
                    <p className="grey-text">
                      Η επέκταση της δραστηριότητας μας στο εξωτερικό, η
                      προώθηση των ελληνικών προϊόντων και η εξέλιξη των
                      συνεργατών μας παράλληλα με την Rolly Rolly.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </section>
          <section className="my-3 p-3">
            <MDBRow>
              <MDBCol
                size="12"
                md="9"
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
              >
                <form
                  method="post"
                  name="contact"
                  className="w-100"
                  data-netlify="true"
                  action="/thank-you"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <h3 className="h3-responsive font-weight-bold text-center my-5">
                    Φόρμα επικοινωνίας
                  </h3>
                  <p hidden>
                    <label>
                      Don’t fill this out if you’re human:{' '}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grey-text">
                    <MDBInput
                      label="Ονοματεπώνυμο"
                      name="name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Email"
                      name="email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Θέμα"
                      name="subject"
                      icon="tag"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      type="textarea"
                      name="text"
                      rows="2"
                      label="Κείμενο"
                      icon="pencil-alt"
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn
                      type="submit"
                      className="orange lighten-4 black-text"
                    >
                      Αποστολη
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
      )}
    />
  )
}

const query = graphql`
  query {
    ananaGirl: file(relativePath: { eq: "about/anana-girl.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default AboutUsComponent
