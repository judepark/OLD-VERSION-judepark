import React from 'react'
 
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="FAQ" keywords={[`gatsby`, `application`, `react`]} />
    <footer style={{marginTop: '0.45rem', fontSize: '85%'}}>About</footer> 
    <br />
<div style={{ maxWidth: `700px`, maxHeight: '300px', overflow: 'hidden', marginBottom: `1.45rem`, verticalAlign: 'middle',}}>
      <Image />
    </div>

<div style={{textAlign: 'right', marginBottom:'1rem' }}><h3 style={{display: 'inline'}}>Contact: </h3><a href="mailto:jude@judepark.com" title="Jude's Email" rel="noopener noreferrer" target="_blank">jude[at]judepark.com</a></div>

<br />
<h1>Hi there, you found Jude.</h1>
<p>I am an interaction designer in pursuit of fairness.</p>
<p>I have over 3 years of experience conducting UX research and design. I completed a masters (UX Design and Information Systems Design), a bachelors (Anthropology, Linguistics and History) and received this award in high school. I am self-taught in CSS, JavaScript and occasionally learn programming languages. As a designer I aim to create fair products and services that do not hinder the user by eliminating mismatches between the user and the system.</p>
<div class="half">
    <div class="tab">
      <input id="tab-one" type="checkbox" name="tabs"></input>
      <label for="tab-one">Why did you become a designer?</label>
      <div class="tab-content">
      <p>Growing up, I was always in pursuit of doing something creative, because that was what naturally gave me joy and I could spend hours doing it without ever feeling tired. Whether it was being in ballet or publishing or writing or drawing - I like the process of articulating an idea. I learned through <a href='http://localhost:8000/Trial%20and%20Error/Trial%20and%20Error'>trial and error</a> how difficult it can be to find a trajectory that you enjoy, are good at, and feel a sense of belonging when doing it. Designing interactions is that trajectory for me.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-two" type="checkbox" name="tabs"></input>
      <label for="tab-two">What is your research/design process?</label>
      <div class="tab-content">
      <p>I take an orbital approach to my design process: At the core is the user who acts as my axis. My goal is to distill clarity in why the user comes and stay.</p>
      <p>I have been told I have a real presence in-person when I approach users, which I leverage to collect dependable data. You can check out my research process here.</p>
      <p>I tend to not stick to one design method - I like to compare and contrast the strengths and weaknesses of existing design methodologies. You can check out my evaluation of design methodologies here.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-three" type="checkbox" name="tabs"></input>
      <label for="tab-three">Which area of design are you most interested in?</label>
      <div class="tab-content">
      <p>What interests me as a designer is understanding how applications can hinder users, based on harmful or discriminatory design practices. Pursuing fair access to products through design is what motivates me and makes me get up in the morning. As technology continues to grow as a field, we are in constant catch-up mode to all the biases and breaches of security and ethics - I truly believe design is the gateway that can bring about any sort of balance to this disorder.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-four" type="checkbox" name="tabs"></input>
      <label for="tab-four">How do you spend your free time?</label>
      <div class="tab-content">
      <p>Mostly I like to read or work on my projects while listening to music. I have taken a business idea and built a startup around it (Loo). I have a research blog and youtube channel that evaluates design methodologies (Fair Design). I have built and deployed applications for use by real people (Lumii, Bookies, PhotoPrompt). I write about many things, mostly about design (/stories). I have a side-business in the form of a skincare company that aims to educate consumers about skincare, instead of making profits (ToNer.Co). I have designed and written magazines and books (JUDE Journal, Book of Revelations). I have a podcast where I reflect today’s culture through literary works, but in a cheeky way (Nightstand). I also like to draw comics (WITSB).</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-five" type="checkbox" name="tabs"></input>
      <label for="tab-five">You got a CV on you?</label>
      <div class="tab-content">
      <p>Yep. Here it is.</p>
      </div>
    </div>
  </div>
<br />
  </Layout>
)

export default AboutPage