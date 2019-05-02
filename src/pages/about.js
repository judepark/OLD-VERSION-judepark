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
      <h3>
      Contact:
      <br/>
      ✉ <a style={{textDecoration: 'underline'}} href="mailto:jude@judepark.com" title="Jude's Email">Email</a>
      <br/>
      🖺 <a style={{textDecoration: 'underline'}} href="..\..\Jude Park CV.pdf" title="Jude's CV" rel="noopener noreferrer" target="_blank">CV</a> 
      <br/>
      <br/>
      Websites:
      <br/>
      🗖 <a style={{textDecoration: 'underline'}} href="https://www.fairdesign.ca/" title="Fair Design Research Site" rel="noopener noreferrer" target="_blank">Fair Design</a>
      <br/>
      🗖 <a style={{textDecoration: 'underline'}} href="https://www.whyistheskybluecomic.com/" title="Hey Jude~ Webcomics" rel="noopener noreferrer" target="_blank"> Hey Jude Comics</a>
      <br/>
      <br/>
      Hobbies:
      <br/>
      ▪ <a style={{textDecoration: 'underline'}} href="https://github.com/judepark" title="Jude's Github Page'" rel="noopener noreferrer" target="_blank">My Code</a>
      <br/>
      ▪ <a style={{textDecoration: 'underline'}} href="https://dribbble.com/judepark" title="Jude's Dribble Page'" rel="noopener noreferrer" target="_blank">My Art</a>
      <br/>
      ▪ <a style={{textDecoration: 'underline'}} href="https://issuu.com/judepark" title="Jude's Books" rel="noopener noreferrer" target="_blank">My Books</a>
      <br/>
      ▪ <a style={{textDecoration: 'underline'}} href="https://soundcloud.com/judepark" title="Jude's Podcasts" rel="noopener noreferrer" target="_blank">My Podcasts</a>
      <br/>
      ▪ <a style={{textDecoration: 'underline'}} href="https://linkedin.com/in/judepark" title="Jude's LinkedIn Page'" rel="noopener noreferrer" target="_blank">My LinkedIn</a>
      </h3>
    </div>

    <div id={"aboutright"} style={{ display: 'inline-block', marginLeft: '1.5rem', width: '65%', marginTop: '1rem', marginBottom: '1.45rem', verticalAlign: 'top',}}>
    <h1>
    Jude is an interaction designer, fair design researcher, and doodler.
    <br/><br/>
    Jude creates products that do not hinder the user by eliminating 
    mismatches between the user and the system.
    <br/><br/>
    Jude’s expertise in helping people access the information they need without barriers or bias 
    can help organizations design accessible products for the future. 
    <br/><br/>
    Fairly designed products and services will be essential for longevity and success in the 21st century. 
    <br/><br/>
    Jude is looking for the next project to collaborate on with some amazing people. <a style={{textDecoration: 'underline'}} href="mailto:jude@judepark.com" title="Jude's Email"> Let's have tea!</a>
    </h1>
    </div>

<br/>
<br />

  </Layout>
)

export default AboutPage