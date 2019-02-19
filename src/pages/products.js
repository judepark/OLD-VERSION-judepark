import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'
 
const ProductsPage = ({data}) => (
  <Layout>
    <SEO title="products" keywords={[`gatsby`, `application`, `react`]} />
    <footer style={{marginTop: '0.45rem', fontSize: '85%'}}>Products</footer> 
    <br />
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id}>
            <Img sizes={post.node.frontmatter.image.childImageSharp.sizes} />
            <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
            <p>{post.node.excerpt}</p>
            <p>{post.node.frontmatter.date}</p>
            <br />
        </div>
    ))}

  </Layout>
)

export default ProductsPage

export const pageQuery = graphql`
    query ProductIndexQuery {
            allMarkdownRemark 
            (sort: { order: DESC, fields: [frontmatter___date] } filter: { fileAbsolutePath: {regex : "/src\/products/"} })
            {
              edges {
                node {
                    id
                    frontmatter {
                    path
                    title
                    date(formatString: "dddd, MMMM Do YYYY")
                    author
                    image {
                      childImageSharp{
                          sizes(maxWidth: 700, maxHeight:150) {
                              ...GatsbyImageSharpSizes
                          }
                      }
                  }
                  }
                  excerpt(pruneLength: 140)
                }
              }
            }
    }
`

