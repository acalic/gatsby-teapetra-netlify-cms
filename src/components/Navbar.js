import React from 'react'
import { Link } from 'gatsby'
//import logo from '../img/logo-blue.png'
import logo1 from '../img/TPlogo1 gold.png'
import logo2 from '../img/TPlogo1 gold2.png'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Location } from '@reach/router';

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
              <img className="logo" src={this.props.isHome ? logo2 : logo1} alt="teapetra.com"/>
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
              <div className="navbar-item dropdown">
                <div className="dropdown-trigger">
                  <div aria-haspopup="true" aria-controls="dropdown-menu">
                    <Location>
                      {({ location }) => {
                        let urlSegments = location.pathname.split("/");
                        return <span className={"navbar-item " + (urlSegments[1] === 'portfolio' ? 'active' : '')}>Portfolio</span>
                      }}
                    </Location>
                  </div>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <ul className="dropdown-content">
                    <AniLink fade duration={0.4} to="/portfolio/wedding" activeClassName="active" partiallyActive={true} getProps={({isPartiallyCurrent}) => isPartiallyCurrent ? { style: {background: 'red'}} : null}>
                      <li className="dropdown-item">
                        Wedding
                      </li>
                    </AniLink>
                    <AniLink fade duration={0.4} to="/portfolio/elopement" activeClassName="active" partiallyActive={true}>
                      <li className="dropdown-item">
                        Elopement
                      </li>
                    </AniLink>
                    <AniLink fade duration={0.4} to="/portfolio/lifestyle" activeClassName="active" partiallyActive={true}>
                      <li className="dropdown-item">
                        Lifestyle
                      </li>
                    </AniLink>
                  </ul>
                </div>
              </div>
              <div className="navbar-item dropdown">
                <div className="dropdown-trigger">
                  <div aria-haspopup="true" aria-controls="dropdown-menu">
                    <Location>
                      {({ location }) => {
                        let urlSegments = location.pathname.split("/");
                        return <span className={"navbar-item " + (urlSegments[1] === 'musica' ? 'active' : '')}>Musica</span>
                      }}
                    </Location>
                  </div>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                  <ul className="dropdown-content">
                    <AniLink fade duration={0.4} to="/musica/biography" activeClassName="active" partiallyActive={true}>
                      <li className="dropdown-item">
                        Biography
                      </li>
                    </AniLink>
                    <AniLink fade duration={0.4} to="/musica/videos" activeClassName="active" partiallyActive={true}>
                      <li className="dropdown-item">
                        Videos
                      </li>
                    </AniLink>
                    <AniLink fade duration={0.4} to="/musica/prices" activeClassName="active" partiallyActive={true}>
                      <li className="dropdown-item">
                        Prices
                      </li>
                    </AniLink>
                  </ul>
                </div>
              </div>
              <AniLink fade duration={0.4} className="navbar-item" to="/blog" activeClassName="active" partiallyActive={true}>
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
