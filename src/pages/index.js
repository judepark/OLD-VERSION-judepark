import React from 'react'
import Layout from '../components/layout'
import Image1 from '../components/image1'
import Image2 from '../components/image2'
import Image3 from '../components/image3'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <footer style={{marginTop: '0.45rem', fontSize: '85%'}}>Interaction designer</footer> 
    <br />

    <div class="imageall">
    <div alt="" class="imageone" style={{ maxWidth: `700px`, maxHeight: '300px', overflow: 'hidden', marginBottom: `1.45rem`, verticalAlign: 'middle',}}>
      <Image1 />
    </div>
    <div alt="" class="imagetwo" style={{ maxWidth: `700px`, maxHeight: '300px', overflow: 'hidden', marginBottom: `1.45rem`, verticalAlign: 'middle',}}>
      <Image2 />
    </div>
    <div alt="" class="imagethree" style={{ maxWidth: `700px`, maxHeight: '300px', overflow: 'hidden', marginBottom: `1.45rem`, verticalAlign: 'middle',}}>
      <Image3 />
    </div>
    </div>

    <p>Jude is an interaction designer based in Toronto.</p>
    <br />

</Layout>

)

export default IndexPage
