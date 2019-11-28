import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const PortfolioGallery = ({ data, props }) => {

  //let { edges: posts } = data.allMarkdownRemark

  //let filtered = [];
  let reduced = data.allMarkdownRemark.edges.reduce(function(filtered, post) {

    let postGallery = post.node.fields.slug.split("/"); // Splits on a single slash
    postGallery = postGallery[2];

    if (postGallery === props.galleryName) {
       filtered.push(post);
    }
    return filtered;
  }, []);

  return (
    <div className="blog columns is-multiline">
      {reduced &&
        reduced.map(({ node: post }) => (
          <article className="is-parent column is-4" key={post.id}>
            <AniLink 
              fade 
              to={post.fields.slug}
              className="image-wrap"
            >
              <PreviewCompatibleImage
                className="menu-image"
                imageInfo={{
                  image: post.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${
                    post.title
                  }`,
                }}
              />
              <div className="overlay">{post.frontmatter.title}</div>
            </AniLink>
          </article>
        ))}
    </div>
  )
}

PortfolioGallery.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default (props, $gal) => (
  <StaticQuery
    query={graphql`
      query PortfolioGallery($gal: String) {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {frontmatter: {templateKey: {eq: "portfolio-post"}}, fields: {slug:{regex: $gal}}}
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PortfolioGallery data={data} count={count} props={props} $gal={props.galleryName}/>}
  />
)
