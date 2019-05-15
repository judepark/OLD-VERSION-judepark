import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image1'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`about`, `designer`, `UX`, `UI`, `interaction`, `jude`, `jude park`]} />
    <footer style={{marginTop: '0.45rem', marginBottom: '1.45rem'}}>About</footer> 

    <div style={{display: 'inline-block', width: '31%', marginBottom: `1.45rem`}}>
      <Image id="aboutpic" />
    </div>

    <div id={"aboutright"} style={{ display: 'inline-block', marginLeft: '1.5rem', width: '65%', marginTop: '1rem', marginBottom: '1.45rem', verticalAlign: 'top',}}>
    <h1>
    Hi I'm a UX & Interaction Designer / Researcher of all things fair / Mindless doodler /
    </h1>
    <h3>
    <br/>
    Find me:
    <br/>
    <a style={{textDecoration: 'underline'}} href="mailto:jude@judepark.com" title="Jude's Email">Email</a> / <a style={{textDecoration: 'underline'}} href="https://linkedin.com/in/judepark" title="Jude's LinkedIn" rel="noopener noreferrer" target="_blank">LinkedIn</a> / <a style={{textDecoration: 'underline'}} href="https://github.com/judepark" title="Jude's Github'" rel="noopener noreferrer" target="_blank">Github</a> / <a style={{textDecoration: 'underline'}} href="https://dribbble.com/judepark" title="Jude's Dribble Page'" rel="noopener noreferrer" target="_blank">Dribble</a>
    <br/>
    <br/>
    My other sites:
    <br/>
    <a style={{textDecoration: 'underline'}} href="https://www.fairdesign.ca/" title="Fair Design Research Site" rel="noopener noreferrer" target="_blank">fairdesign.ca</a>
    <br/>
    <a style={{textDecoration: 'underline'}} href="https://www.heyjudecomic.com/" title="Hey Jude~ Webcomics" rel="noopener noreferrer" target="_blank">heyjudecomic.com</a>


    </h3>
    </div>

<br/>
<br />

  </Layout>
)

export default AboutPage
