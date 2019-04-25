import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>I'm Marcel, a full-stack developer from Brazil.</h2>
      <p>Need a developer?</p> <Link to="/contact">Contact me.</Link>
    </div>
  )
}

export default IndexPage
