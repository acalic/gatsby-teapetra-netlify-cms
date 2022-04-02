import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

import "./index-page.scss";

export const IndexPageTemplate = () => (
  <div className="d-flex align-items-center text-centered">
    <h1>Site suspended</h1>
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  mainCarousel: PropTypes.shape({
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  const images = [
    {
      original: frontmatter.mainCarousel.image1,
      thumbnail: "",
    },
    {
      original: frontmatter.mainCarousel.image2,
      thumbnail: "",
    },
    {
      original: frontmatter.mainCarousel.image3,
      thumbnail: "",
    },
  ];

  return (
    <Layout isHome>
      <IndexPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        mainCarousel={frontmatter.mainCarousel}
        mainCarouselFormated={images}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

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
`;
