import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import ResponsiveGallery from "../components/ResponsiveGallery";

/* import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import ScrollAnimation from "react-animate-on-scroll"; */

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  galleryImages,
}) => {
  const PostContent = contentComponent || Content;

  /* const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  }; */

  let photosUrls = [];
  let photos = [];

  if (galleryImages && galleryImages.length) {
    var merged = [].concat.apply([], galleryImages);
    photosUrls = merged.filter((el) => el);
  }

  photosUrls.forEach(function(item) {
    let photo = {};

    photo.src = item;
    photo.thumbnail = item;
    photo.caption = "";

    photos.push(photo);

    /* OLD, WITHOUT CLOUDINARY */
    /* let pAspectRat = item.childImageSharp.fluid.aspectRatio;
      let pWidthRatio, pHeightRatio;

      if (pAspectRat >= 1.2) { pWidthRatio = 4; pHeightRatio = 3; } //landscape;
      if (pAspectRat <= 0.8) { pWidthRatio = 3; pHeightRatio = 4; } //portrait;
      if (pAspectRat > 0.8 && pAspectRat < 1.2) { pWidthRatio = 1; pHeightRatio = 1; } //square

      item.src = item.childImageSharp.fluid.src;
      item.width = pWidthRatio;
      item.height = pHeightRatio; */
  });

  return (
    <section className="section porfolio-post">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1 portfolio-post-gallery">
            <h1 className="title has-text-weight-bold is-bold-light">
              {title}
            </h1>

            <p>{description}</p>

            <ResponsiveGallery
              images={photos.map(({ src, thumbnail, caption }) => ({
                src,
                thumbnail,
                caption,
              }))}
            />

            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

PortfolioPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data;

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
        //galleryImages={post.frontmatter.galleryImages}
      />
    </Layout>
  );
};

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default PortfolioPost;

export const pageQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
