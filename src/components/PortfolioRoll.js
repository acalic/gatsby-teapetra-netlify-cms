import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import AniLink from "gatsby-plugin-transition-link/AniLink";

class PortfolioRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    //console.log("edges:"+JSON.stringify(posts[0].node));
    //console.log(posts)

    return (
      <div className="blog columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
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
}

PortfolioRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "portfolio-post" } } }
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
    render={(data, count) => <PortfolioRoll data={data} count={count} />}
  />
)
