module.exports = {
  siteMetadata: {
    title: `Jude Park`,
    description: `The personal site of Jude Park, an interaction designer.`,
    author: `Jude Park`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: { 
          families: ['Droid Sans', 'Droid Serif']
        }
      }
    },
    `gatsby-remark-copy-linked-files`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stories`,
        path: `${__dirname}/src/stories`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/products`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          // ...
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
