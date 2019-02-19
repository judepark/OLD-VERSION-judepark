import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

/* 
if you want the excerpt/date shown:
<p class = 'footnotes' style={{marginTop: '-1.25rem'}}>{post.node.excerpt}</p>
<p class = 'footnotes'>{post.node.frontmatter.date}</p>
*/

const StoriesPage = ({data}) => (
  <Layout>
    <SEO title="stories" keywords={[`gatsby`, `application`, `react`]} />
    <footer style={{marginTop: '0.45rem', fontSize: '85%'}}>Stories</footer> 
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id}>
            <Link to={post.node.frontmatter.path}><p style={{marginBottom:'-0.2em', marginTop: '-0.2em'}}>{post.node.frontmatter.title}</p></Link>
            <small style={{display: 'inline'}}>{post.node.frontmatter.date} · {post.node.fields.readingTime.text}</small>
        </div>
    ))}
    <br />
  </Layout>
)

export const pageQuery = graphql`
    query StoryIndexQuery {
            allMarkdownRemark 
            (sort: { order: DESC, fields: [frontmatter___date] } filter: { fileAbsolutePath: {regex : "/src\/stories/"} })
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

export default StoriesPage
