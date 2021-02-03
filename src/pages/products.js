import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { MDBContainer, MDBIcon, MDBBox } from 'mdbreact'
import Modal from 'react-modal'
import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import SimpleSlider from '../components/simple-slider'

import '../styles/styles.css'
import '../styles/responsive-font.less'
import ProductItem from '../components/products/product-item'

class ProductsPage extends Component {
  state = {
    isIcecreamModalOpen: false,
    isJuiceModalOpen: false,
    isMilkshakeModalOpen: false,
    isBeveragesModalOpen: false,
    isPancakeModalOpen: false,
    isYoghurtModalOpen: false,
  }

  closeIceCreamModal = () => {
    this.setState({
      isIcecreamModalOpen: false,
    })
  }

  renderIceCreamModal(data) {
    return (
      <Modal
        isOpen={this.state.isIcecreamModalOpen}
        closeTimeoutMS={500}
        className="my-modal p-0"
        overlayClassName="my-modal-overlay"
      >
        <SimpleSlider data={data} onClose={this.closeIceCreamModal} />
      </Modal>
    )
  }

  renderJuiceModal(data) {
    return (
      <Modal
        isOpen={this.state.isJuiceModalOpen}
        closeTimeoutMS={500}
        className="my-modal p-0"
        overlayClassName="my-modal-overlay"
      >
        <div className="h-100 overflow-hidden orange lighten-5">
          <div className="slideshow-container d-flex align-center">
            <MDBIcon
              size="2x"
              icon="times"
              onClick={() =>
                this.setState({
                  isJuiceModalOpen: false,
                })
              }
              className="modal-close-icon"
            />
            <Img
              fluid={data.menuJuice.childImageSharp.fluid}
              alt="Μενού χυμοί"
              className="w-100"
            />
          </div>
        </div>
      </Modal>
    )
  }

  renderMilkshakeModal(data) {
    return (
      <Modal
        isOpen={this.state.isMilkshakeModalOpen}
        closeTimeoutMS={500}
        className="my-modal p-0"
        overlayClassName="my-modal-overlay"
      >
        <div className="h-100 overflow-hidden pink lighten-5">
          <div className="slideshow-container d-flex align-center">
            <MDBIcon
              size="2x"
              icon="times"
              onClick={() =>
                this.setState({
                  isMilkshakeModalOpen: false,
                })
              }
              className="modal-close-icon"
            />
            <Img
              fluid={data.menuMilkshake.childImageSharp.fluid}
              alt="Μενού milkshake"
              className="w-100"
            />
          </div>
        </div>
      </Modal>
    )
  }

  renderBeveragesModal(data) {
    return (
      <Modal
        isOpen={this.state.isBeveragesModalOpen}
        closeTimeoutMS={500}
        className="my-modal p-0"
        overlayClassName="my-modal-overlay"
      >
        <div className="h-100 overflow-hidden teal lighten-5">
          <div className="slideshow-container d-flex align-center">
            <MDBIcon
              size="2x"
              icon="times"
              onClick={() =>
                this.setState({
                  isBeveragesModalOpen: false,
                })
              }
              className="modal-close-icon"
            />
            <Img
              fluid={data.menuBeverage.childImageSharp.fluid}
              alt="Μενού ροφήματα"
              className="w-100"
            />
          </div>
        </div>
      </Modal>
    )
  }

  renderPancakesModal(data) {
    return (
      <Modal
        isOpen={this.state.isPancakeModalOpen}
        closeTimeoutMS={500}
        className="my-modal p-0"
        overlayClassName="my-modal-overlay"
      >
        <div className="h-100 overflow-hidden teal lighten-5">
          <div className="slideshow-container d-flex align-center">
            <MDBIcon
              size="2x"
              icon="times"
              onClick={() =>
                this.setState({
                  isPancakeModalOpen: false,
                })
              }
              className="modal-close-icon"
            />
            <Img
              fluid={data.menuPancake.childImageSharp.fluid}
              alt="Μενού πανκεικ"
              className="w-100"
            />
          </div>
        </div>
      </Modal>
    )
  }

  renderYoghurtModal(data) {
    return (
      <Modal
        isOpen={this.state.isYoghurtModalOpen}
        closeTimeoutMS={500}
        className="my-modal p-0"
        overlayClassName="my-modal-overlay"
      >
        <div className="h-100 overflow-hidden orange lighten-5">
          <div className="slideshow-container d-flex align-center">
            <MDBIcon
              size="2x"
              icon="times"
              onClick={() =>
                this.setState({
                  isYoghurtModalOpen: false,
                })
              }
              className="modal-close-icon"
            />
            <Img
              fluid={data.menuYoghurt.childImageSharp.fluid}
              alt="Μενού γιαούρτια"
              className="w-100"
            />
          </div>
        </div>
      </Modal>
    )
  }

  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <Layout>
            <SEO
              title="Προϊόντα"
              keywords={[
                'Frozen yoghurt',
                'Yoghurt',
                'Pancakes',
                'Πανκεικς',
                'Μιλκσεικ',
                'Milkshake',
                'Ice',
                'Παγωτό ρολλακιa',
                'Παγωτό ρολλακια',
                'Ρολλακια',
                'Ιαπωνικό pancake',
                'Shuffle pancake',
                'Γλυκό',
              ]}
            />

            {this.renderIceCreamModal(data)}
            {this.renderJuiceModal(data)}
            {this.renderMilkshakeModal(data)}
            {this.renderBeveragesModal(data)}
            {this.renderPancakesModal(data)}
            {this.renderYoghurtModal(data)}
            <MDBContainer className="wide-container  overflow-hidden">
              <MDBBox tag="section" className="mt-2 mb-5 p-3" id="portfolio">
                <div class="text-center">
                  <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Προϊόντα
                  </h2>
                  <p
                    style={{
                      borderRadius: '36px',
                    }}
                    className="responsive-font w-responsive text-center mx-auto mb-5 orange lead lighten-5 text-muted  lighten-5 p-3 "
                  >
                    Όλα τα προϊόντα μας ειναι παρασκευασμένα από 100% φρέσκα
                    ελληνικά προιόντα
                  </p>
                </div>
                <div class="row">
                  <ProductItem
                    onModalOpen={() => {
                      this.setState({
                        isIcecreamModalOpen: true,
                      })
                    }}
                    color="pink"
                    img={data.posterIceCream.childImageSharp.fluid}
                    altText="Παγωτό φράουλα"
                    hoverIconName="ice-cream"
                    title="Παγωτά"
                    text="Το ανεπανάληπτο Rolled Ice Cream έρχεται σε 3
                    διαφορετικές βάσεις παγωτού (βανίλια, σοκολάτα και
                    vegan σπιρουλίνα). Σκέψου το δικό σου τρελό συνδυασμό
                    και εμείς θα τον κάνουμε πραγματικότητα μπροστά στα
                    μάτια σου!"
                  />

                  <ProductItem
                    onModalOpen={() => {
                      this.setState({
                        isPancakeModalOpen: true,
                      })
                    }}
                    color="teal"
                    img={data.posterPancake.childImageSharp.fluid}
                    altText="Σουφλέ πανκεικ"
                    hoverIconName="cookie"
                    title="Soufflé Pancakes"
                    text=" Τα γιαπωνέζικης προέλευσης pancakes έρχονται να σας
                        ταξιδέψουν σε ένα γευστικό ταξίδι μαζί με τη συντροφιά
                        των φρούτων, της σοκολάτας και του παγωτού. Είναι
                        αέρινα, αφράτα και δελεαστικά, ένας συνδυασμός που θα
                        εξιτάρει τον ουρανίσκο σας. Το νέο καινοτόμο προϊόν
                        της Rolly Rolly είναι εδώ για να σας ξετρελάνει!"
                  />

                  <ProductItem
                    onModalOpen={() => {
                      this.setState({
                        isYoghurtModalOpen: true,
                      })
                    }}
                    color="orange"
                    img={data.posterYoghurt.childImageSharp.fluid}
                    altText="Γιαούρτι"
                    hoverIconName="mortar-pestle"
                    title="Γιαούρτι"
                    text="Ήρθε το νέο RollyRolly Super Cup. Το απολαυστικό
                    προϊόν, ready-to-get από κατάστημά μας, το οποίο
                    ετοιμάζουμε με φροντίδα κάθε πρωί για να
                    εμπλουτίσουμε το πιο σημαντικό γεύμα της ημέρας σας,
                    παρέχοντας σας τα οφέλη μιας υγιεινής διατροφής."
                  />

                  <ProductItem
                    onModalOpen={() => {
                      this.setState({
                        isJuiceModalOpen: true,
                      })
                    }}
                    color="orange"
                    img={data.posterJuice.childImageSharp.fluid}
                    altText="Φρούτα"
                    hoverIconName="apple-alt"
                    title="Φρέσκοι χυμοί"
                    text="Με τόση φρεσκάδα και ποικιλία σε φρούτα, είναι κρίμα
                    να χάσεις ένα δροσιστικό, πολυβιταμινούχο
                    pick-me-up."
                  />

                  <ProductItem
                    onModalOpen={() => {
                      this.setState({
                        isMilkshakeModalOpen: true,
                      })
                    }}
                    color="pink"
                    img={data.posterMilkshake.childImageSharp.fluid}
                    altText="Μιλκσεικ"
                    hoverIconName="prescription-bottle"
                    title="Milkshakes"
                    text="Τα milkshakes μας, παρασκευασμένα από 100% φρέσκο
                    γάλα σε συνδυασμό με τις απεριόριστες επιλογές που
                    προσφέρουν τα παγωτά μας, είναι εδώ για να δροσίσουν
                    αλλά και να συναρπάσουν."
                  />

                  <ProductItem
                    onModalOpen={() => {
                      this.setState({
                        isBeveragesModalOpen: true,
                      })
                    }}
                    color="teal"
                    img={data.posterBeverage.childImageSharp.fluid}
                    altText="Καφές"
                    hoverIconName="coffee"
                    title="Ροφήματα"
                    text="Η γεύση και το άρωμα του δικού μας Ethiopia blend
                    έρχεται να χαρίσει στους λάτρεις του καφέ στιγμές
                    ζεστασιάς και ευεξίας. Αξίζει να τον δοκιμάσετε!"
                  />
                </div>
              </MDBBox>
            </MDBContainer>
          </Layout>
        )}
      />
    )
  }
}

const query = graphql`
  query {
    posterIceCream: file(
      relativePath: { eq: "products/poster-ice-cream.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    posterJuice: file(relativePath: { eq: "products/poster-juice.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    posterMilkshake: file(
      relativePath: { eq: "products/poster-milkshake.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    posterBeverage: file(relativePath: { eq: "products/poster-beverage.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    posterPancake: file(relativePath: { eq: "products/poster-pancake.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    posterYoghurt: file(relativePath: { eq: "products/poster-yoghurt.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    menuIceCream1: file(relativePath: { eq: "products/menu-ice-cream-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    menuIceCream2: file(relativePath: { eq: "products/menu-ice-cream-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    menuJuice: file(relativePath: { eq: "products/menu-juice.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    menuMilkshake: file(relativePath: { eq: "products/menu-milkshake.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    menuBeverage: file(relativePath: { eq: "products/menu-beverage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    menuPancake: file(relativePath: { eq: "products/menu-pancake.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    menuYoghurt: file(relativePath: { eq: "products/menu-yoghurt.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default ProductsPage
