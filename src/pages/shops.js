import React from 'react'
import { MDBContainer } from 'mdbreact'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ShopsComponent from '../components/shops-component'

const ShopsPage = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Hot Zones"
          keywords={[
            `Παγωτο`,
            `Franchise Παγωτο`,
            `Roll`,
            `Rolly ice cream`,
            'Ζαχαροπλαστείο',
            'Patisserie',
            'Κατάστημα παγωτού',
            'hot zones',
            'Αθήνα',
            'Θεσσαλονίκη',
            'Πολύκαστρο',
            'Χανιώτη',
            'Χαλκιδική',
          ]}
        />
        <MDBContainer>
          <ShopsComponent />
        </MDBContainer>
      </Layout>
    </>
  )
}

export default ShopsPage
