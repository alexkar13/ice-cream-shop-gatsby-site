import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutUsComponent from '../components/about-us-component'

class About extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO
            title="About"
            keywords={[`Παγωτο`, `Franchise Παγωτο`, `Roll`, `Rolly ice cream`]}
          />
          <AboutUsComponent />
        </Layout>
      </>
    )
  }
}

export default About
