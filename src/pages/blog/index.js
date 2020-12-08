import React from "react"
import { graphql, Link } from "gatsby"
import Newsletter from "../../components/Utility/newsletter"
import Container from "../../components/container"
import styled from "styled-components"

export default function Blog({ data }) {
  const { posts } = data.blog

  return (
    <Container>
      <Newsletter />
      <StyledBlog>
        <h3>My blog posts</h3>
        {posts.map(post => (
          <article key={post.id}>
            <Link to={post.fields.slug}>
              <h4>{post.frontmatter.title}</h4>
            </Link>
            <small>
              {post.frontmatter.author}, {post.frontmatter.date}
            </small>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </StyledBlog>
    </Container>
  )
}

const StyledBlog = styled.section`
  a {
    text-decoration: none;
  }
  h4 {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: ${props => props.theme.body.title.foreground};
  }
  small {
    color: ${props => props.theme.body.description.foreground};
  }
  p {
    padding: 0.5rem 0;
  }
`

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`