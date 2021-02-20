module.exports = {
  siteMetadata: {
    title: `Cosmic Polygon`,
    description: `Hello, worlds!`,
    author: `@cosmicpolygon`,
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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass")
      }
    },
    'gatsby-transformer-typescript-css-modules',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cosmic Polygon | Design, UX, & Illustration by Christopher Peters`,
        short_name: `cosmicpolygon`,
        start_url: `/`,
        background_color: `#202344`,
        theme_color: `#cd366f`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
