import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Abstract from "../assets/svg/shape/abstract.svg"
import Mathematics from "../assets/svg/Mathematics.svg"
import Design from "../assets/svg/design.svg"
import Diet from "../assets/svg/diet.svg"

import ReactSVG from "../assets/svg/reactjsicon.svg"
import JSSVG from "../assets/svg/js.svg"
import HTML5SVG from "../assets/svg/html5.svg"
import CSS3SVG from "../assets/svg/css3.svg"
import PythonSVG from "../assets/svg/python.svg"
import TypescriptSVG from "../assets/svg/typescript.svg"
import NodejsSVG from "../assets/svg/nodejs.svg"
import FigmaSVG from "../assets/svg/figma.svg"


const skillDetail = {
  dev : "Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. ",
  scrap : "Web Scraping shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. ",
  automation : "Automation shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball."
}


// markup
const AboutMe = () => {
  return (
      <Layout>
        {/* <Abstract className="fill-gray absolute left-10 top-80 z-10 w-[700px] h-[700px]" /> */}
        {/* for measure height of header */}
        <div className="bg-primary-blend-dark px-4 md:px-4 py-4 md:py-2 mb-2 lg:hidden invisible">
          <div className="bg-white py-2">
              <a className="lg:text-lg sm:text-sm md:text-md" >x<br/>x</a>
          </div> 
        </div> 
        <div className="container static flex flex-col justify-center h-fit pb-11 md:h-screen mx-auto">
          <h1 className="text-white font-light w-full text-center  text-2xl mb-5 md:text-3xl md:mb-12 lg:text-left lg:mb-24 z-20 ">Who Am I</h1>
          <div className="container flex flex-col md:flex-row flex-wrap justify-around items-center md:px-12 lg:px-48 z-20">
            <StaticImage 
              src="../images/pfp.png" 
              alt="Profile Picture" 
              className=" w-[150px] h-[150px] mb-10 p-5 md:w-[240px] md:h-[240px] lg:w-[350px] lg:h-[350px] flex flex-wrap justify-between items-center" 
            />
            <div className="max-w-sm px-5 lg:max-w-xl">
              <h2 className="text-white text-lg font-regular mb-5 lg:text-2xl ">
                ชญานิน จัทนานนท์ <br/>
                Chayanin Chanthananond<br/>
              </h2>
              <p className="text-gray text-sm lg:text-base">
                Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball.
              </p>
              <br/>
              <p className="text-gray text-sm lg:text-base">
                Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. 
              </p>
            </div>
          </div>
        </div>
        <div className="container flex flex-col justify-center h-fit md:h-screen mx-auto px-5 py-11">
          <h1 className="text-white font-light w-full text-center lg:text-left text-2xl mb-5 md:text-3xl md:mb-12 lg:mb-24 z-20">Interest</h1>
          <div className="interest-card-container self-end">
            <Diet className="interest-card-icon"/>
            <div className="max-w-xl">
              <h2 className="interest-card-header">{"Food & Drinks"}</h2>
              <p className="text-gray text-sm lg:text-base">
                Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa.
              </p>
            </div>
          </div>
          <div className="interest-card-container self-start">
            <Mathematics className="interest-card-icon"/>
            <div className="max-w-xl">
              <h2 className="interest-card-header">{"Mathematics"}</h2>
              <p className="text-gray text-sm lg:text-base">
                Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa.
              </p>
            </div>
          </div>
          <div className="interest-card-container self-end">
            <Design className="interest-card-icon"/>
            <div className="max-w-xl">
              <h2 className="interest-card-header">{"Art & Design"}</h2>
              <p className="text-gray text-sm lg:text-base">
                Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-light">
          <div className="container flex flex-col justify-center h-fit md:h-screen mx-auto px-5 py-11">
            <h1 className="text-gray-dark font-regular w-full text-center text-2xl mb-5 md:text-3xl md:mb-12 lg:text-left lg:mb-24 z-20 ">Skill Set</h1>
            <div>
              <h2 className="w-full text-center text-xl text-gray-dark font-light my-12">Proficiently</h2>
              <div className="flex justify-center">
                <HTML5SVG className="skill-icon"/>
                <CSS3SVG className="skill-icon"/>
                <JSSVG className="skill-icon"/>
                <NodejsSVG className="skill-icon"/>
                <ReactSVG className="skill-icon"/>
              </div>
            </div>
            <div>
              <h2 className="w-full text-center text-xl text-gray-dark font-light my-12">Basic</h2>
              <div className="flex justify-center">
                <FigmaSVG className="skill-icon"/>
                <TypescriptSVG className="skill-icon"/>
                <PythonSVG className="skill-icon"/>
              </div>
            </div>
            <div>
              <h2 className="w-full text-center text-sm text-gray-dark font-light my-12">
                some small skill I have but not neccessory for you to know
                if you curious to know. click here to expand
              </h2>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default AboutMe
