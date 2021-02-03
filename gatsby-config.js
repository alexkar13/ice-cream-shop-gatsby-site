module.exports = {
  siteMetadata: {
    title: 'Παγωτατζίδικο Rolly Rolly',
    description: 'Παγωτά, πανκεικς, μιλκσεικς. Επενδυτικές ευκαιρίες.',
    siteUrl: 'http://rollyrolly.gr',
    author: 'Alex Karydis',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-less`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rolly-rolly-website`,
        short_name: `Rolly rolly website`,
        start_url: `/`,
        background_color: `#4B5EB8`,
        theme_color: `#68008C`,
        display: `standalone`,
        icon: `${__dirname}/src/images/rolly-rolly-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
