const path = require("path");
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`);
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              tags
              date
              color
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const posts = result.data.allMarkdownRemark.edges;
    // createTagPages(createPage, posts);
    posts.forEach(({ node }) => {
      const path = node.frontmatter.path;
      const title = node.frontmatter.title;
      createPage({
        title,
        path,
        component: blogPostTemplate,
        context: {
          pathSlug: path
        }
      });
    });
  });
};
