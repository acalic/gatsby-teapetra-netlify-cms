import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
//import Header from '../components/Header'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const AboutPageTemplate = ({ title, mainimage, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient page-about">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="page-about-content">
                <div className="about-img-container">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: mainimage,
                      alt: `tea petra about me image`,
                    }}
                  />
                </div>
                <PageContent className="content" content={content} />
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
