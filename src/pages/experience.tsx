import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import DiamondIcon from "../assets/svg/shape/diamond.svg"

// markup
const Experience = () => {
  return (
      <Layout>
        {/* <DiamondIcon className="fill-gray absolute left-40 top-80 z-10 w-48 h-48" /> */}
        <div className="container static flex flex-col justify-center h-screen mx-auto">
          <h1 className="text-3xl text-white font-light mt-8 mb-8 z-20 ">Experience</h1>
          <div className="w-full flex justify-between">
            <div className="w-1/3 flex flex-col z-20">
              <div className="w-full flex flex-col bg-black p-8 my-2">
                <h4 className="text-sm text-gray">{"June 2019 - August 2019"}</h4>
                <h2 className="text-xl mt-2 mb-4 text-white">{"Frontend Developer (Intern) at KBTG"}</h2>
                <p className="text-md text-gray-400">{"Work on Internal project using React and Redux , the project is implement some feature of basic CRM.I'm responsible for create UI using React and design using Adobe XD."}</p>
              </div>
              <div className="w-full flex flex-col bg-black p-8 my-2">
                <h4 className="text-sm text-gray">{"June 2020"}</h4>
                <h2 className="text-xl mt-2 mb-4 text-white">{"Graduated from KMITL"}</h2>
                <p className="text-md text-gray-400">{"Bachelor of Engineering Program in Computer Engineering"}</p>
              </div>
              <div className="w-full flex flex-col bg-black p-8 my-2">
                <h4 className="text-sm text-gray">{"June 2020 - April 2022"}</h4>
                <h2 className="text-xl mt-2 mb-4 text-white">{"RPA Developer at Round2 Solutions"}</h2>
                <p className="text-md text-gray-400">{"Work on Internal project using React and Redux , the project is implement some feature of basic CRM.I'm responsible for create UI using React and design using Adobe XD."}</p>
              </div>
            </div>
            <canvas className="w-1/2 h-[700px] bg-gray-dark z-20"></canvas>
          </div>
        </div>
      </Layout>
  )
}

export default Experience;
