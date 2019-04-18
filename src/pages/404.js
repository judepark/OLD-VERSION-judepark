import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page Not found" />
    <footer style={{marginTop: '0.45rem', fontSize: '85%'}}>404: Page Not Found</footer> 
    <br />
    <h1>Uh oh, this page is not available 😓.</h1>
    <h4>Trying going back to find your way, sorry about this dear visitor.</h4>

<blockquote>"Sometimes in life, you have to take a step back in order to move to forward."</blockquote>
    <br />
  </Layout>
)

export default NotFoundPage
