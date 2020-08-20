module.exports = {
  pathPrefix: `/irgendwas-mit-hardware`,
  siteMetadata: {
    title: "Irgendwas mit Hardware",
    siteUrl: `https://benneq.github.io/irgendwas-mit-hardware`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-tsconfig-paths`
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-plugin-slug`
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`title`, `tags`],
        resolvers: {
          Mdx: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            slug: node => node.fields.slug,
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
        ],
      },
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
