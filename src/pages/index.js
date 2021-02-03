import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Video from '../components/landing/landing-video'
import LandingImageAndText from '../components/landing/landing-image-and-text'
class App extends Component {
  state = {
    matches:
      typeof window !== 'undefined'
        ? window.matchMedia('(max-width: 768px)').matches
        : undefined,
  }

  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches })

    console.log('In  mount window is ', window)

    // Wrap the require in check for window
    if (typeof window !== `undefined`) {
      window
        .matchMedia('(max-width: 768px)')
        .addEventListener('change', handler)
    }
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Home"
            keywords={[
              `Fried ice cream `,
              `Vegan ice cream`,
              `Rolled ice cream`,
              `Παγωτο`,
              `Franchise`,
              `Roll`,
              `Rolly ice cream`,
            ]}
          />
          <Video isMobile={this.state.matches} />
          <LandingImageAndText isMobile={this.state.matches} />
        </Layout>
      </>
    )
  }
}

export default App
