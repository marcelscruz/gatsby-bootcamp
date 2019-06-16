import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from 'components/layout'
import blogStyles from './blog.module.scss'

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blog</h1>

      <ol className={blogStyles.posts}>
        {posts.map((post, index) => {
          const { title, date } = post.node.frontmatter
          const slug = post.node.fields.slug

          return (
            <li key={index + title} className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
