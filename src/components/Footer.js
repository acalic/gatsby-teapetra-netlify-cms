import React from 'react'
import { Link } from 'gatsby'

import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
        </div>
        <div className="content has-text-centered">
          <div className="container has-text-black">
            <span>ROMANTIC. IDEALIST.</span>
            <hr></hr>
            <div className="column">
              croatian/ worldwide/ photographer at all
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
