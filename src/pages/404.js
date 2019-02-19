import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Uh oh, this page is not available.</h1>
    <p>Hmm, I did not create that page. You might have taken a wrong route.</p>
    <p>Try clicking to go back.</p>
  </Layout>
)

export default NotFoundPage
