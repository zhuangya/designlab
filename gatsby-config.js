module.exports = {
  siteMetadata: {
    title: `curiosity wen`,
    description: `curiosity wen, UI/UX Designer.`,
    author: `@ curiosity wen`
  },
  plugins: [

    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyfkotOQ2FFeGdxW`, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `appQ7dZb0ldgR7Ugz`,
            tableName: `Sandwiches`
          },
          {
            baseId: `appQ7dZb0ldgR7Ugz`,
            tableName: `Resources`
          }
        ]
      }
    },
    
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/
                    }
                  }
                }
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false
              },
              escapeEntities: {}
            }
          }
        ]
      }
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#6E74E0`,
        theme_color: `#6E74E0`,
        display: `minimal-ui`,
        icon: `src/images/dr.png`
      }
    }
  ]
};
