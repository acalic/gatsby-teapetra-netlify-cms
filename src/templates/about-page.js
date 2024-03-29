import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
//import Header from '../components/Header'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ScrollAnimation from 'react-animate-on-scroll';

export const AboutPageTemplate = ({ title, mainimage, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient page-about">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h1 className="title is-size-3 is-bold-light">
                {title}
              </h1>
              <div className="page-about-content">
                <ScrollAnimation animateIn="slideInLeft">
                  <div className="about-img-container">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: mainimage,
                        alt: `tea petra about me image`,
                      }}
                    />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInRight">
                  <PageContent className="content" content={content} />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      {/* <Header
        title={'About Me'}
        backgroundImgUrl={'/img/blog-index.jpg'}>
      </Header> */}
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        mainimage={post.frontmatter.mainimage}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        mainimage
      }
    }
  }
`
