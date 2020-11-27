import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Hero from "../components/sections/Hero"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
