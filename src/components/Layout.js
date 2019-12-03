import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

import appleTouchIcon from "../img/apple-touch-icon.png"
import favicon16 from "../img/favicon-16x16.png"
import favicon32 from "../img/favicon-32x32.png"

import { TinyButton as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here

const TemplateWrapper = ({ children, isHome }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={appleTouchIcon}
        />
        <link
          rel="icon"
          type="image/png"
          href={favicon32}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={favicon16}
          sizes="16x16"
        />

        {/* <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        /> */}

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar isHome={isHome}/>
        <div>{children}</div>
      <Footer />
      <ScrollUpButton ContainerClassName="btn-scrolltop"/>
    </div>
  )
}

export default TemplateWrapper
