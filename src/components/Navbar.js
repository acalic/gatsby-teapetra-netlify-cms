import React from 'react'
import { Link } from 'gatsby'
//import logo from '../img/logo.svg'
import logo from '../img/logo-teapetra.png'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className={"navbar " + (this.props.isHome && 'is-home')}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img className="logo" src={logo} alt="teapetra.com"/>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div 
              className={"navbar-start has-text-centered "}
            >
              <AniLink duration={0.4} fade className="navbar-item" to="/">
                Home
              </AniLink>
              <AniLink fade duration={0.4} className="navbar-item" to="/about" activeClassName="active">
                About
              </AniLink>
              {/* <AniLink fade duration={0.4} className="navbar-item" to="/portfolio" activeClassName="active">
                Portfolio
              </AniLink> */}
              <a className="navbar-item dropdown is-active">
                <div className="dropdown-trigger">
                  <div aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Portfolio</span>
                  </div>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <ul className="dropdown-content">
                    <AniLink fade duration={0.4} to="/portfolio/wedding" activeClassName="active">
                      <li className="dropdown-item">
                        Wedding
                      </li>
                    </AniLink>
                    <AniLink fade duration={0.4} to="/portfolio/elopement" activeClassName="active">
                      <li className="dropdown-item">
                        Elopement
                      </li>
                    </AniLink>
                    <AniLink fade duration={0.4} to="/portfolio/lifestyle" activeClassName="active">
                      <li href="#" className="dropdown-item">
                        Lifestyle
                      </li>
                    </AniLink>
                  </ul>
                </div>
              </a>
              <AniLink fade duration={0.4} className="navbar-item" to="/blog" activeClassName="active">
                Blog
              </AniLink>
              <AniLink fade duration={0.4} className="navbar-item" to="/contact" activeClassName="active">
                Contact
              </AniLink>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
