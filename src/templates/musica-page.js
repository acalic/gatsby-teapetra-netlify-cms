import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
//import Header from '../components/Header'
import Content, { HTMLContent } from '../components/Content'
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ScrollAnimation from 'react-animate-on-scroll';

export const MusicaPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient page-musica">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h1 className="title is-size-3 is-bold-light">
                {title}
              </h1>
              <div className="page-musica-content">
                <ScrollAnimation animateIn="slideInUp">
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

MusicaPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const MusicaPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      {/* <Header
        title={'About Me'}
        backgroundImgUrl={'/img/blog-index.jpg'}>
      </Header> */}
      <MusicaPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

MusicaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MusicaPage

export const musicaPageQuery = graphql`
  query MusicaPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
