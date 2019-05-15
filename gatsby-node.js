const path = require('path');

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions

    const researchTemplate = path.resolve('src/components/research-template.js');
    const portfolioTemplate = path.resolve('src/components/portfolio-template.js');

    return graphql(`
    {
        allMarkdownRemark {
            edges {
              node {
                html  
                id 
                frontmatter {
                  path
                  date
                  title
                  description
                  author
                  template
                  tags
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
            if (node.frontmatter.template === 'portfolio') {
                createPage({
                    path: node.frontmatter.path,
                    component: portfolioTemplate,
            })
        }
        }),

        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            if (node.frontmatter.template === 'research') {
                createPage({
                    path: node.frontmatter.path,
                    component: researchTemplate,z
            })
        }
    })
}
)}
