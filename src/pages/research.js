import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

/* 
if you want the excerpt/date shown:
<p class = 'footnotes' style={{marginTop: '-1.25rem'}}>{post.node.excerpt}</p>
<p class = 'footnotes'>{post.node.frontmatter.date}</p>
*/

const ResearchPage = ({data}) => (
  <Layout>
    <SEO title="Research" keywords={[`blog`, `blog posts`, `research`, `designer`, `UX`, `UI`, `interaction`, `jude`, `jude park`]} />
    <footer style={{marginTop: '0.45rem'}}>Research</footer> 
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id}>
            <Link to={post.node.frontmatter.path}><h3 style={{marginBottom:'-0.2em', marginTop: '-0.2em'}}>{post.node.frontmatter.title}</h3></Link>
            <small style={{display: 'inline'}}>{post.node.fields.readingTime.text} · {post.node.frontmatter.date}</small>
        </div>
    ))}
    <br />
    <hr class="globalnavline" 
          style={{ 
            width: '31%',
      }}>
      </hr>
    <h3>View more on Jude's <a style={{textDecoration: 'underline'}} href="https://www.fairdesign.ca/" title="Fair Design Research Site" rel="noopener noreferrer" target="_blank">Fair Design Research site</a></h3>
    <br />  
  </Layout>
)

export const pageQuery = graphql`
    query ResearchIndexQuery {
            allMarkdownRemark 
            (sort: { order: DESC, fields: [frontmatter___date] } filter: { fileAbsolutePath: {regex : "/src\/research/"} })
            {
              edges {
                node {
                    id
                    frontmatter {
                    path
                    title
                    date(formatString: "MMM Do YYYY")
                    author
                  }
                  fields {
                    readingTime {
                      text
                    }
                  }
                  excerpt(pruneLength: 75)
                }
              }
            }
    }
`

export default ResearchPage
