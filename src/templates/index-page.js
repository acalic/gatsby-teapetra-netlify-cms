import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

import ImageGallery from 'react-image-gallery';
import './index-page.scss';

import ScrollAnimation from 'react-animate-on-scroll';

export const IndexPageTemplate = ({
  textColorWhite,
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  mainCarousel,
  mainCarouselFormated
}) => (
  <div>
    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div> */}
    <div className="header-carousel margin-top-0">
      <ImageGallery
        items={mainCarouselFormated}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
      />
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">

              <ScrollAnimation animateIn="slideInUp">
                <div className="landing-headline">
                  Sweetheart, <br/>
                  Let's pour <br/>
                  tangible MAGIC <br/>
                </div>
              </ScrollAnimation >

              <ScrollAnimation animateIn="slideInUp">
                <div className="home-header-paragraph">
                  <h1 className="title">{title}</h1>
                  <p className="subtitle">{description}</p>
                </div>
              </ScrollAnimation >

              {/* <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div> */}
              {/* <Features gridItems={intro.blurbs} /> */}
              {/* <div className="columns">
                <div className="column is-12 has-text-centered">
                  <Link className="btn" to="/products">
                    See all products
                  </Link>
                </div>
              </div> */}

              <ScrollAnimation animateIn="fadeIn">
                <div className="is-12 has-margin-top-3">
                  <h3 className="has-text-weight-semibold">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="is-12 has-text-centered">
                    <AniLink 
                      fade 
                      to={"/blog"}
                      className="btn"
                    >
                      READ MORE
                    </AniLink>
                  </div>
                </div>
              </ScrollAnimation >

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  mainCarousel: PropTypes.shape({
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  const images = [
    {
      original: frontmatter.mainCarousel.image1,
      thumbnail: '',
    },
    {
      original: frontmatter.mainCarousel.image2,
      thumbnail: ''
    },
    {
      original: frontmatter.mainCarousel.image3,
      thumbnail: ''
    }
  ]

  return (
    <Layout isHome>
      <IndexPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        mainCarousel={frontmatter.mainCarousel}
        mainCarouselFormated={images}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
        mainCarousel {
          image1
          image2
          image3
        }
      }
    }
  }
`
