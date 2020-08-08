module.exports = {
  pathPrefix: `/irgendwas-mit-hardware`,
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Irgendwas mit Hardware`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#3f51b5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
