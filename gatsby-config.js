module.exports = {
  siteMetadata: {
    title: `Design+Code`,
    description: `Don’t skip design. Learn design and code by building real apps with React and Swift. Complete courses about the best tools.`,
    author: `@nextglabs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Design+Code`,
        short_name: `Design+Code`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#3913B8`,
        display: `standalone`,
        icon: `${__dirname}/static/images/logos/logo.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
