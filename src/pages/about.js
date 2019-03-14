import React from 'react'
 
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="FAQ" keywords={[`gatsby`, `application`, `react`]} />
    <footer style={{marginTop: '0.45rem', marginBottom: '1.45rem'}}>About</footer> 
<div style={{ maxWidth: `725px`, maxHeight: '300px', overflow: 'hidden', marginBottom: `1.45rem`, verticalAlign: 'middle',}}>
      <Image />
    </div>

<div style={{textAlign: 'right', marginTop:'-0.8rem' }}><h3 style={{display: 'inline'}}>Contact <a style={{textDecoration: 'underline'}} href="mailto:jude@judepark.com" title="Jude's Email">me!</a></h3></div>

<br />

<h1>
You found Jude 🤩.
</h1>

<h4>
I’m a Korean/Canadian interaction designer based in Toronto.
<br />
I studied at <a style={{textDecoration: 'underline'}} href="https://www.trentu.ca/" title="Trent University" rel="noopener noreferrer" target="_blank">Trent</a> and <a style={{textDecoration: 'underline'}} href="https://ischool.utoronto.ca/areas-of-study/user-experience-design/" title="University of Toronto - User Experience Design Masters Program" rel="noopener noreferrer" target="_blank">UofT</a>, currently working as a UX Consultant.


<br />
I specialize in UI/UX design & interactions, with expertise in <a style={{textDecoration: 'underline'}} href="http://localhost:8000/what_is_fair_design" title="Fair Design Research Blog">fair design</a>.
<br />
I’m all about creating fair, lightweight and effortless experiences.
</h4>

<h4>
Also check out my:
<br />
<a style={{textDecoration: 'underline'}} href="..\..\Jude Park CV.pdf" title="Jude's CV" rel="noopener noreferrer" target="_blank">CV</a> | <a style={{textDecoration: 'underline'}} href="https://www.fairdesign.ca/" title="Jude's Research" rel="noopener noreferrer" target="_blank">Research</a> | <a style={{textDecoration: 'underline'}} href="https://www.instagram.com/heyjudecomic/" title="Jude's Comics" rel="noopener noreferrer" target="_blank">Comic</a> | <a style={{textDecoration: 'underline'}} href="https://dribbble.com/judepark" title="Jude's Art" rel="noopener noreferrer" target="_blank">Art</a> | <a style={{textDecoration: 'underline'}} href="https://issuu.com/judepark" title="Jude's Books" rel="noopener noreferrer" target="_blank">Books</a> | <a style={{textDecoration: 'underline'}} href="https://soundcloud.com/judepark" title="Jude's Podcasts" rel="noopener noreferrer" target="_blank">Podcasts</a> 
</h4>
<br />
  </Layout>
)

export default AboutPage