import * as React from "react"
import ProjectCard from "../components/projectCard"
import Layout from "../components/layout"
import DiamondIcon from "../assets/svg/shape/diamond.svg"

// markup
const Projects = () => {
  return (
      <Layout>
        {/* <DiamondIcon className="fill-gray absolute left-40 top-80 z-10 w-48 h-48" /> */}
        <div className="container static flex flex-col items-center h-screen mx-auto">
          <h1 className="text-3xl text-white font-light mt-36 mb-12 z-20 ">Experience</h1>
          <ProjectCard
            topic={"Recipe Searching"}
            detail={"arigoto"}
            url={"#"}
          />
        </div>
      </Layout>
  )
}

export default Projects;
