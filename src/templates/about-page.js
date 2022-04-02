import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
//import Header from '../components/Header'
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({ contentComponent }) => {
  const PageContent = contentComponent || Content;

  return <section className="section section--gradient page-about"></section>;
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

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
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

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
`;
