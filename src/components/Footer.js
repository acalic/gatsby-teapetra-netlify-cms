import React from 'react'

import instagram from '../img/social/instagram.svg'
import facebook from '../img/social/facebook.svg'
import linkedin from '../img/social/linkedin.svg'
import scrolltop from '../img/chevron-upwards-arrow.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <div className="container has-text-black">
            <span id="footer-tagline">ROMANTIC. IDEALIST.</span>
            <hr className="separator"></hr>
            <div className="column">
              TeaPetra 2020.
            </div>
            <div className="column" style={{padding: 0}}>
              croatian/ worldwide/ artist at all
            </div>
            <div className="column social-icons">
              <a title="instagram" href="https://instagram.com/odettekokeshi">
                <img
                  src={instagram}
                  alt="Instagram"
                />
              </a>
              <a title="facebook" href="https://facebook.com/">
                <img
                  src={facebook}
                  alt="Facebook"
                />
              </a>
              <a title="linkedin" href="https://linkedin.com/in/">
                <img
                  src={linkedin}
                  alt="Linkedin"
                />
              </a>
              {/*<span title="scrolltop" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <img
                  src={scrolltop}
                  alt="scrolltop"
                  style={{ width: '1.5em', height: '1.5em', padding: "5px", background: "#000", opacity: 0.6, borderRadius: 50 }}
                />
              </span>*/}
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
