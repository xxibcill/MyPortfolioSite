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
        <Abstract className="fill-gray absolute left-10 top-80 z-10 w-[700px] h-[700px]" />
        <div className="container static flex flex-col justify-center h-screen mx-auto">
          <h1 className="text-3xl text-white font-light pl-24 mb-24 z-20 ">Who Am I</h1>
          <div className="container flex flex-wrap justify-around items-center px-48 z-20">
            <StaticImage 
              src="../images/pfp.png" 
              alt="A Profile Picture" 
              className="max-w-[350px] max-h-[350px] flex flex-wrap justify-between items-center p-5" 
            />
            <div className="max-w-xl">
              <h2 className="text-xl font-bold text-white mb-5">
                ชญานิน จัทนานนท์ <br/>
                Chayanin Chanthananond<br/>
              </h2>
              <p className="text-gray">
                Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball.
              </p>
              <br/>
              <p className="text-gray">
                Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. 
              </p>
            </div>
          </div>
        </div>
        <div className="container flex flex-col justify-center h-screen mx-auto">
          <h1 className="text-3xl text-white font-light pl-24 mb-24 ">Interest</h1>
          <div className="container flex flex-wrap justify-center px-48 mb-24">
            <Diet className="w-[100px] h-[100px] mx-24"/>
            <div className="max-w-xl">
              <h2 className="text-md text-white mb-2">{"Food & Drinks"}</h2>
              <p className="text-gray">
                Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa.
              </p>
            </div>
          </div>
          <div className="container flex flex-wrap justify-center px-48 mb-24">
            <Mathematics className="w-[100px] h-[100px] mx-24"/>
            <div className="max-w-xl">
              <h2 className="text-md text-white mb-2">{"Mathematics"}</h2>
              <p className="text-gray">
                Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa.
              </p>
            </div>
          </div>
          <div className="container flex flex-wrap justify-center px-48 mb-24">
            <Design className="w-[100px] h-[100px] mx-24"/>
            <div className="max-w-xl">
              <h2 className="text-md text-white mb-2">{"Art & Design"}</h2>
              <p className="text-gray">
                Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-light">
          <div className="container flex flex-col justify-center h-screen mx-auto ">
            <h1 className="text-3xl text-gray-dark font-light pl-24 mb-24 ">Skill Set</h1>
            <div>
              <h2 className="w-full text-center text-xl text-gray-dark font-light my-12">Proficiently</h2>
              <div className="flex justify-center">
                <HTML5SVG className="w-[100px] h-[100px] m-5"/>
                <CSS3SVG className="w-[100px] h-[100px] m-5"/>
                <JSSVG className="w-[100px] h-[100px] m-5"/>
                <NodejsSVG className="w-[100px] h-[100px] m-5"/>
                <ReactSVG className="w-[100px] h-[100px] m-5"/>
              </div>
            </div>
            <div>
              <h2 className="w-full text-center text-xl text-gray-dark font-light my-12">Basic</h2>
              <div className="flex justify-center">
                <FigmaSVG className="w-[100px] h-[100px] m-5"/>
                <TypescriptSVG className="w-[100px] h-[100px] m-5"/>
                <PythonSVG className="w-[100px] h-[100px] m-5"/>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default AboutMe
