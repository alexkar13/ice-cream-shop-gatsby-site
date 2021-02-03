import React from 'react'
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBInput,
  MDBBox,
  MDBTypography,
  MDBAlert,
} from 'mdbreact'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Accordion from '../components/Accordion'
import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const FranchisePage = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <SEO
            title="Franchise"
            keywords={[
              `Παγωτο`,
              `Franchise Παγωτο`,
              `Roll`,
              `Rolly ice cream`,
              'Φραντσαιζ',
              'Φραντσαιζ Ελλάδα',
              'Franchise ευκαιρίες',
              'Φραντσαιζ ευκαιρίες',
              'Επενδύσεις',
              'Investment Greece',
              'Κατάστημα',
              'Επιχειρήσεις',
              'Επιχείρηση',
              'Επενδυτικές ευκαιρίες',
              'Επενδυτική ευκαιρία',
              'Investment opportunity',
              'Προϊόντα rolly Φραντσαιζ',
              'Φραντσαιζ Ελλάδα',
              'Franchise ευκαιρίες',
              'Φραντσαιζ ευκαιρίες',
              'Επενδύσεις',
              'Investment Greece',
              'Κατάστημα',
              'Επιχειρήσεις',
              'Επιχείρηση',
              'Επενδυτικές ευκαιρίες',
              'Επενδυτική ευκαιρία',
              'Investment opportunity',
              'Προϊόντα rolly',
            ]}
          />
          <MDBBox tag="section" className="mt-2 mb-5 p-3">
            <MDBContainer size="xl">
              <MDBTypography
                tag="h1"
                variant="h1-responsive"
                className="font-weight-bold text-center my-5"
              >
                Come roll with us!!
              </MDBTypography>
              <MDBTypography className="lead grey-text text-center w-responsive mx-auto mb-5">
                Είμαστε μια από τις ταχύτερα αναπτυσσόμενες εταιρίες rolled ice
                cream στην Ελλάδα. Έχοντας προσαρμόσει το μενού, τις τιμές και
                τις επιχειρησιακές διαδικασίες άριστα στις ανάγκες τις αγοράς,
                μπορούμε με βεβαιότητα να μοιραστούμε το κερδοφόρο επιχειρησιακό
                μοντέλο μας και τη συνταγή της επιτυχίας με κάθε φιλόδοξο
                επενδυτή.
              </MDBTypography>
              <MDBRow style={{ marginBottom: '32px', alignItems: 'center' }}>
                <MDBCol lg="6" className="text-center text-lg-left my-3">
                  <form
                    method="post"
                    name="franchise"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    action="/thank-you"
                  >
                    <input type="hidden" name="form-name" value="franchise" />
                    <p className="h5 text-center mb-4">
                      Ξεκίνα την συνεργασία μας τώρα!
                    </p>
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
                        background={false}
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
                        label="Investment range"
                        icon="euro-sign"
                        name="range"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        name="text"
                        type="textarea"
                        rows="2"
                        label="Κείμενο"
                        icon="pencil-alt"
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn
                        type="submit"
                        className="teal lighten-4 black-text  "
                      >
                        Αποστολη
                        <MDBIcon far icon="paper-plane" className="ml-1" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
                <MDBCol lg="6">
                  <div className="text-center">
                    <Img
                      fluid={data.shop.childImageSharp.fluid}
                      alt="Ένα κατάστημα Rolly Rolly"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow
                style={{ justifyContent: 'center' }}
                className="light-blue lighten-5 px-2 pb-4"
                style={{
                  borderRadius: '36px',
                }}
              >
                <MDBCol size="12">
                  <MDBTypography
                    tag="h3"
                    variant="h3-responsive"
                    className="font-weight-bold text-center mt-5 mb-3 mx-auto"
                  >
                    Το επιχειρηματικό σου ταξίδι
                  </MDBTypography>
                  <MDBTypography className="text-center mx-auto mb-4">
                    Ακολουθώντας τα παρακάτω βήματα μπορείς και εσύ να γίνεις
                    μέλος των πιο επαναστατικών καταστημάτων franchise.
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="12">
                  <Accordion
                    title={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '36px',
                            marginRight: '16px',
                            textAlign: 'center',
                          }}
                        >
                          <MDBIcon size="2x" icon="comment" />
                        </div>
                        Επικοινώνησε
                      </div>
                    }
                    content="Επικοινωνήστε μαζί μας και κλείστε τη συνεδρία σας με την ομάδα επέκτασης franchise της Rolly Rolly"
                  />
                  <Accordion
                    title={
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'center',
                        }}
                      >
                        <div
                          style={{
                            width: '36px',
                            marginRight: '16px',
                            textAlign: 'center',
                          }}
                        >
                          <MDBIcon size="2x" icon="info-circle" />
                        </div>
                        Ενημερώσου
                      </div>
                    }
                    content="  Συλλέξτε όλες τις πληροφορίες στην αναλυτική παρουσίαση που θα σας παρέχουμε"
                  />
                  <Accordion
                    title={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '36px',
                            marginRight: '16px',
                            textAlign: 'center',
                          }}
                        >
                          <MDBIcon size="2x" icon="map-marker-alt" />
                        </div>
                        Eξασφαλίσου
                      </div>
                    }
                    content="
          Κάντε κράτηση και εξασφαλίστε εξοπλισμό για το
          κατάστημα σας και αποκλειστικότητα στην περιοχή που
          επιλέξατε
        "
                  />
                  <Accordion
                    title={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '36px',
                            marginRight: '16px',
                            textAlign: 'center',
                          }}
                        >
                          <MDBIcon size="2x" icon="warehouse" />
                        </div>
                        Βρες το κατάστημα σου
                      </div>
                    }
                    content="
          Βρείτε το ιδανικό για εσάς κατάστημα
        "
                  />
                  <Accordion
                    title={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '36px',
                            marginRight: '16px',
                            textAlign: 'center',
                          }}
                        >
                          <MDBIcon size="2x" icon="key" />
                        </div>
                        Φτιάξε το κατάστημα των ονείρων σου
                      </div>
                    }
                    content="
          Αφήστε το design και τις εγκαταστάσεις του
          καταστήματός σας πάνω μας και… πάρτε τα κλειδιά στο
          χέρι
        "
                  />
                  <Accordion
                    title={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '36px',
                            marginRight: '16px',
                            textAlign: 'center',
                          }}
                        >
                          <MDBIcon size="2x" icon="university" />
                        </div>
                        Λάβε τα εφόδια
                      </div>
                    }
                    content="
          Εκμεταλλευτείτε την εκπαίδευση προσωπικού και
          πρακτικών διοίκησης και διαχείρισης που σας
          παρέχουμε μέσω του “Rolly Rolly training school”
        "
                  />
                  <Accordion
                    title={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '36px',
                            marginRight: '16px',
                            textAlign: 'center',
                          }}
                        >
                          <MDBIcon size="2x" icon="gift" />
                        </div>
                        Ξεκίνα το ταξίδι σου
                      </div>
                    }
                    content="
          Επιτρέψτε μας να ολοκληρώσουμε με τα εγκαίνια του
                            καταστήματός σας και ξεκινήστε το ταξίδι σας στο
                            μαγευτικό κόσμο των επιχειρήσεων"
                  />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBBox>
        </Layout>
      )}
    />
  )
}

const query = graphql`
  query {
    shop: file(relativePath: { eq: "franchise/shop-side.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default FranchisePage
