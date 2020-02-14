import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types'
//import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  galleryImages
}) => {
  const PostContent = contentComponent || Content

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  let photos = galleryImages[0];

  photos = photos.map(obj=> ({ ...obj, src: obj.childImageSharp.fluid.src, height: 1, width: 1 }))

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">

            <h1 className="title has-text-weight-bold is-bold-light">
              {title}
            </h1>

            <p>{description}</p>

            <Gallery photos={photos} onClick={openLightbox} direction={'row'}/>

            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      src: x.childImageSharp.fluid.src,
                      srcset: x.childImageSharp.fluid.srcSet,
                      sizes: x.childImageSharp.fluid.sizes,
                      caption: '',
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>

            <PostContent content={content} />
            
          </div>
        </div>
      </div>
    </section>
  )
}

PortfolioPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  galleryImages: PropTypes.array,
}

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PortfolioPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Portfolio">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        galleryImages={post.frontmatter.galleryImages}
      />
    </Layout>
  )
}

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PortfolioPost

export const pageQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        galleryImages {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
