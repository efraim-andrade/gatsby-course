import React from "react"
import { Link } from "gatsby"

import { SEO } from "../components"
import { DefaultLayout as Layout } from "../layouts"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About page" />

      <h1>about page</h1>

      <ul>
        <li>
          <Link to="/" activeStyle={{ color: "red" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeStyle={{ color: "red" }}>
            About
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
