import React from 'react'
import Layout from '../components/layout'


export default function Template({data}) {
    const post = data.markdownRemark

    return(<Layout>
        <div>
            <footer style={{marginTop: '0.45rem'}}>Research</footer> 
            <br /> 
            <h1>{post.frontmatter.title}</h1>

            <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
        </Layout>
    )
}


export const postQuery = graphql`
    query ResearchPostByPath($path: String!) {
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