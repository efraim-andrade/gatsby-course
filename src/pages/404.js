import React from "react"

import { SEO } from "../components"
import { DefaultLayout as Layout } from "../layouts"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Ops... não tem nada aqui.</p>
  </Layout>
)

export default NotFoundPage
