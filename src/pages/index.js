import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello!</h1>
      <h2>I'm Marcel, a full-stack developer from Brazil.</h2>
      <p>Need a developer?</p> <Link to="/contact">Contact me.</Link>
    </Layout>
  )
}

export default IndexPage
