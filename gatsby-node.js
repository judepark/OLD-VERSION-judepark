const path = require('path');

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions

    const storyTemplate = path.resolve('src/components/stories-template.js');
    const productTemplate = path.resolve('src/components/products-template.js');

    return graphql(`
    {
        allMarkdownRemark {
            edges {
              node {
                html  
                id 
                frontmatter {
                  path
                  title
                  author
                  date
                  template
                  description
                }
              }
            }
          }
    }
    `).then(res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }
 
        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            if (node.frontmatter.template === 'product') {
                createPage({
                    path: node.frontmatter.path,
                    component: productTemplate,
            })
        }
        }),

        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            if (node.frontmatter.template === 'stories') {
                createPage({
                    path: node.frontmatter.path,
                    component: storyTemplate,
            })
        }
    })
}
)}
