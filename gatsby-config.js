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
  ],
}
