import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'
import SEO from '../components/seo'

/* 
if you want the read case study shown:
<small style={{display: 'inline'}}>Read Case Study ➜</small>
*/
 
const ProductsPage = ({data}) => (
  <Layout>
    <SEO title="products" keywords={[`gatsby`, `application`, `react`]} />
    <footer style={{marginTop: '0.45rem', marginBottom: '1.45rem'}}>Products</footer> 
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id}>
            <Img style={{marginBottom: '-1rem'}} sizes={post.node.frontmatter.image.childImageSharp.sizes}/>
            <div  style={{marginTop: '-6.6em'}}>
            <Link to={post.node.frontmatter.path}><h3 style={{marginBottom:'-0.2em', marginTop: '0em'}}>{post.node.frontmatter.title}</h3>
            <small style={{display: 'inline'}}>{post.node.frontmatter.description}</small>
            <br/>
            <small style={{display: 'inline'}}>{post.node.frontmatter.date}</small>
            <br />
            </Link>
            </div>
            <br />
            <br />  
        </div> 
    ))}
    <br />
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
                    date(formatString: "MMM YYYY")
                    author
                    description
                    image {
                      childImageSharp{
                          sizes(maxWidth: 725, maxHeight:150, quality: 100) {
                              ...GatsbyImageSharpSizes
                          }
                      }
                  }
                  }
                  excerpt(pruneLength: 50, format: PLAIN)
                }
              }
            }
    }
`

