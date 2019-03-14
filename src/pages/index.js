import React from 'react'
import Layout from '../components/layout'
import Image1 from '../components/image1'
import Image2 from '../components/image2'
import Image3 from '../components/image3'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <footer style={{marginTop: '0.45rem', marginBottom: '1.45rem'}}>Interaction designer</footer> 
  
    <div style={{ maxWidth: `700px`, maxHeight: '300px', overflow: 'hidden', marginBottom: `1.45rem`, verticalAlign: 'middle',}}>
      <Image1 />
    </div>

    <div style={{textAlign: 'right', marginTop:'-0.8rem' }}><h3 style={{display: 'inline'}}>Welcome to my site!</h3></div>

    <br />

    <h1>I'm Jude, an interaction designer based in Toronto.</h1>
    <h4>Full-time designer, part-time researcher, seasonal writer, casual doodler, embarking entrepreneur, leisurely swimmer/dancer, occasional dnd player.</h4>
    <h4>Currently working as a UX Consultant. <a style={{textDecoration: 'underline'}} href="mailto:jude@judepark.com" title="Jude's Email">Let's chat!</a></h4>
    <br />

</Layout>

)

export default IndexPage
