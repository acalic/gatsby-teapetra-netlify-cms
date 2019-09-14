import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
//import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import ImageGallery from 'react-image-gallery';
import './index-page.scss';

// import header1 from "../img/header-1.jpg"
// import header2 from "../img/header-2.jpg"
// import header3 from "../img/header-3.jpg"

// const images = [
//   {
//     original: header1,
//     thumbnail: '',
//   },
//   {
//     original: header2,
//     thumbnail: ''
//   },
//   {
//     original: header3,
//     thumbnail: ''
//   }
// ]

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
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{description}</h3>
                  </div>
                </div>
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
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
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

  //console.log(frontmatter.mainCarousel);

  const images = [
    {
      original: frontmatter.mainCarousel.image1.childImageSharp.fluid.src,
      thumbnail: '',
    },
    {
      original: frontmatter.mainCarousel.image2.childImageSharp.fluid.src,
      thumbnail: ''
    },
    {
      original: frontmatter.mainCarousel.image3.childImageSharp.fluid.src,
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
          image1 {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image2 {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image3 {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
