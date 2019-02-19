import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div 
    style={{
      background: `white`,
      marginTop: '10px',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.8rem 1.0875rem 0rem`,
      }}
    >
      <ul class="globalnav"
        style={{ 
        margin: 0,
        listStyle: 'none',
        display:'flex',
        justifycontent: 'space-evenly',
      }}>

        <li style={{
          marginRight: 'auto',
        }}>
        <a href="/">{siteTitle}</a>
        </li>

        <li style={{
          marginRight: '-0.5em',
          padding: '0 2em 0 0',
          textTransform: 'none',
        }}>
        <a href="/products">Products</a>
        </li>

        <li style={{
          marginRight: '-0.5em',
          padding: '0 2em 0 0',
        }}>
        <a href="/stories">Stories</a>
        </li>

        <li>
        <a href="/about">About</a>
        </li>
      </ul>  
      
      <hr class="globalnavline" 
          style={{ 
            width: '31%',
      }}>
      </hr>
      
      
      
    </div>

    <div 
    style={{
      padding: `1rem 1.0875rem 0rem`,
    }}
    >{}</div>

  </div>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
