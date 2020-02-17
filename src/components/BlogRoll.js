import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import AniLink from "gatsby-plugin-transition-link/AniLink";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    //console.log("edges:"+JSON.stringify(posts[0].node.frontmatter));

    return (
      <div className="blog columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <article
              className={"is-parent column is-4 " + (post.frontmatter.postvisible ? '' : 'hidden')}
              key={post.id}
            >
              <AniLink 
                fade 
                to={post.fields.slug}
                className="image-wrap"
              >
                <PreviewCompatibleImage
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

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                postvisible
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 300, quality: 100) {
                      aspectRatio
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
