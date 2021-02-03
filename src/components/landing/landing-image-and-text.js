import React from 'react'
import { MDBCol, MDBTypography, MDBContainer, MDBRow, MDBBox } from 'mdbreact'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Media from 'react-media'

import RollyRollyGif from './../../images/index/rolly-rolly.gif'

import '../../styles/styles.css'

export default props => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <MDBBox tag="section" id="intro-text" className="mt-2 mb-5 p-3">
          <MDBContainer size="xl">
            <Media
              queries={{
                small: '(max-width: 730px)',
                large: '(min-width: 731px)',
              }}
            >
              {matches => (
                <>
                  {matches.small && (
                    <>
                      <h1 className="h1-responsive font-weight-bold" my-1>
                        Καλώς ήρθες στον χρωματιστό κόσμο της{' '}
                        <span style={{ color: '#f8a926' }}>Rolly</span>
                        <span style={{ color: '#32afe5' }}>Rolly</span>!!
                      </h1>
                      <MDBTypography
                        tag="p"
                        variant="p-responsive"
                        className="lead grey-text mb-2"
                      >
                        Η Rolly Rolly φέρνει την επανάσταση στον κόσμο του
                        παγωτού, παντρεύοντας τις υπέροχες γεύσεις που όλοι
                        αγαπήσαμε με φρεσκάδα και χειροποίητο τρόπο παρασκευής,
                        εφαρμόζοντας παράλληλα τις πιο καινοτόμες και
                        επιτυχημένες πρακτικές franschise στην αγορά.{' '}
                      </MDBTypography>

                      <div
                        style={{
                          height: '200px',
                          display: 'flex',
                        }}
                      >
                        <img
                          className="img-fluid h-100 object-fit-contain overflow-hidden mx-auto"
                          src={RollyRollyGif}
                          alt=""
                          // style={{
                          //   height: '100%',
                          //   objectFit: 'contain',
                          //   overflow: 'hidden',
                          //   marginLeft: 'auto',
                          //   marginRight: 'auto',
                          // }}
                        />
                      </div>

                      <MDBRow
                        style={{
                          alignItems: 'center',
                          marginTop: '32px',
                        }}
                        center
                      >
                        <MDBCol xs="12" md="6" style={{ marginBottom: '16px' }}>
                          <MDBTypography
                            tag="h2"
                            variant="h4-responsive"
                            className="font-weight-bold"
                          >
                            100% φρέσκο Eλληνικό παγωτό...
                          </MDBTypography>

                          <MDBTypography
                            tag="p"
                            variant="p-responsive"
                            className="grey-text"
                          >
                            Το παγωτό μας παρασκευάζεται από 100% φρέσκο γάλα
                            και φρούτα από τον τόπο μας με μια διαδικασία που θα
                            συναρπάσει μικρούς και μεγάλους.
                          </MDBTypography>

                          <Img
                            fluid={data.shop.childImageSharp.fluid}
                            alt="Ένα κατάστημα Rolly Rolly"
                          />
                        </MDBCol>

                        <MDBCol xs="12" md="6" className="my-2">
                          <MDBRow style={{ alignItems: 'center' }}>
                            {/* small display */}
                            <MDBCol size={'12'}>
                              <MDBTypography
                                tag="h2"
                                variant="h4-responsive"
                                className="font-weight-bold g"
                              >
                                Ο στόχος μας...
                              </MDBTypography>
                              <MDBTypography
                                tag="p"
                                variant="p-responsive"
                                className="grey-text"
                              >
                                Ο στόχος μας είναι να φορέσουμε σε κάθε γειτονιά
                                το πλατύ χαμόγελο που προκαλεί η ακαταμάχητη
                                γεύση του φρέσκου και χειροποίητου παγωτού,
                                δημιουργώντας παράλληλα θέσεις εργασίας και
                                επενδυτικές ευκαιρίες.
                              </MDBTypography>
                            </MDBCol>
                            {/* small display */}
                            <MDBCol size={'12'}>
                              <Img
                                fluid={data.pinkGirl.childImageSharp.fluid}
                                alt="Μια χαμογελαστή κοπέλα"
                              />
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </>
                  )}
                  {matches.large && (
                    <>
                      <MDBRow
                        style={{
                          alignItems: 'center',
                          marginTop: '16px',
                        }}
                        center
                      >
                        <MDBCol size="8">
                          <h1 className="h1-responsive font-weight-bold my-5">
                            Καλώς ήρθες στον χρωματιστό κόσμο της{' '}
                            <span style={{ color: '#f8a926' }}>Rolly</span>
                            <span style={{ color: '#32afe5' }}>Rolly</span>!!
                          </h1>

                          <MDBTypography
                            tag="p"
                            variant="p-responsive"
                            className="lead grey-text mb-5"
                          >
                            Η Rolly Rolly φέρνει την επανάσταση στον κόσμο του
                            παγωτού, παντρεύοντας τις υπέροχες γεύσεις που όλοι
                            αγαπήσαμε με φρεσκάδα και χειροποίητο τρόπο
                            παρασκευής, εφαρμόζοντας παράλληλα τις πιο
                            καινοτόμες και επιτυχημένες πρακτικές franschise
                            στην αγορά.{' '}
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol size="4">
                          <div
                            style={{
                              height: '250px',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              marginLeft: '16px',
                            }}
                          >
                            <img
                              class="img-fluid"
                              src={RollyRollyGif}
                              alt=""
                              style={{
                                // width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                overflow: 'hidden',
                              }}
                            />
                          </div>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow
                        style={{
                          alignItems: 'center',
                          marginTop: '32px',
                        }}
                        center
                      >
                        <MDBCol xs="12" md="6" style={{ marginBottom: '16px' }}>
                          <MDBTypography
                            tag="h2"
                            variant="h4-responsive"
                            className="font-weight-bold"
                          >
                            100% φρέσκο Eλληνικό παγωτό...
                          </MDBTypography>

                          <MDBTypography
                            tag="p"
                            variant="p-responsive"
                            className="grey-text"
                          >
                            Το παγωτό μας παρασκευάζεται από 100% φρέσκο γάλα
                            και φρούτα από τον τόπο μας με μια διαδικασία που θα
                            συναρπάσει μικρούς και μεγάλους.
                          </MDBTypography>
                          <Img
                            fluid={data.shop.childImageSharp.fluid}
                            alt="Ένα κατάστημα Rolly Rolly"
                          />
                        </MDBCol>

                        <MDBCol xs="12" md="6" className="my-2">
                          <MDBRow style={{ alignItems: 'center' }}>
                            {/* large display */}
                            <MDBCol size={'6'}>
                              <MDBTypography
                                tag="h2"
                                variant="h4-responsive"
                                className="font-weight-bold g"
                              >
                                Ο στόχος μας...
                              </MDBTypography>
                              <MDBTypography
                                tag="p"
                                variant="p-responsive"
                                className="grey-text"
                              >
                                Ο στόχος μας είναι να φορέσουμε σε κάθε γειτονιά
                                το πλατύ χαμόγελο που προκαλεί η ακαταμάχητη
                                γεύση του φρέσκου και χειροποίητου παγωτού,
                                δημιουργώντας παράλληλα θέσεις εργασίας και
                                επενδυτικές ευκαιρίες.
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol size={'6'}>
                              <Img
                                fluid={data.pinkGirl.childImageSharp.fluid}
                                alt="Μια χαμογελαστή κοπέλα"
                              />
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </>
                  )}
                </>
              )}
            </Media>
          </MDBContainer>
        </MDBBox>
      )}
    />
  )
}

const query = graphql`
  query {
    shop: file(relativePath: { eq: "index/shop-front.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    pinkGirl: file(relativePath: { eq: "index/main-welcome.png" }) {
      childImageSharp {
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
