/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://wloskiodzera.headlesshub.com/graphql`,
      },
    },
  ],
}
