import * as React from "react"
import Layout from "../components/layout"
// markup
const IndexPage = () => {
  return (
      <Layout>
        <div className="container w-screen h-screen py-28 mx-auto bg-gray-dark">
          <h1 className="text-white text-5xl antialiased font-extrabold">Who am I</h1>
        </div>
        <div className="container w-screen h-screen py-28 mx-auto bg-gray">
        </div>
        <div className="container w-screen h-screen py-28 mx-auto bg-gray-light">
        </div>
      </Layout>
  )
}

export default IndexPage
