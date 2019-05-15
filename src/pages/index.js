import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`designer`, `UX`, `UI`, `interaction`, `consultant`, `jude`, `jude park`]} />
    <footer style={{marginTop: '0.45rem', marginBottom: '1.45rem'}}>Interaction Designer</footer> 

<div style={{ maxWidth: `725px`, maxHeight: '300px', overflow: 'hidden', marginBottom: `1.45rem`, verticalAlign: 'middle',}}>
      <Image />
</div>

<div style={{textAlign: 'right', marginTop:'-0.8rem' }}><h3 style={{display: 'inline'}}>Welcome to my site!</h3></div>



<br />
  </Layout>

)

export default IndexPage
