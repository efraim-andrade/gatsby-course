import React from "react"
import { Link } from "gatsby"

import { SEO, Layout } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>

    <ul>
      <li>
        <Link to="/" activeStyle={{ color: "red" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
