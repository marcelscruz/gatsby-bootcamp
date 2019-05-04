import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from 'components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  console.log(posts)

  return (
    <Layout>
      <h1>Blog</h1>

      <ol>
        {posts.map((post, index) => (
          <li key={index + post.node.frontmatter.title}>
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
