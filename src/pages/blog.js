import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from 'components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>

      <ol className={blogStyles.posts}>
        {posts.map((post, index) => {
          const { title, slug, publishedDate } = post.node
          // const slug = post.node.fields.slug

          return (
            <li key={index + title} className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
