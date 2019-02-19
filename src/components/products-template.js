import React from 'react'
import Layout from '../components/layout'


export default function Template({data}) {
    const post = data.markdownRemark

    return(<Layout>
        <div>
            <footer style={{marginTop: '0.45rem', fontSize: '85%'}}>Products</footer>
            <br />
            <p>{post.frontmatter.title}</p>

            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
        </Layout>
    )
}


export const productQuery = graphql`
    query ProductPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: {eq:$path}}){
            html
            frontmatter{
                path
                title
                date
                author
            }
        }
    }
`