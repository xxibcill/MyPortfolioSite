import * as React from "react"
import Layout from "../components/layout"
import HiremeButton from '../components/HiremeButton'
import SkillCard from "../components/skillCard"
import Coding from "../assets/coding.svg";
import Webdesign from "../assets/webdesign.svg";
import Automation from "../assets/automation.svg";
import ArrowRightCircle from "../assets/arrow-right-circle.svg";
import ProcessAutomation from "../assets/process-automation.svg";
import BusinessReport from "../assets/business-report.svg";
import Excel from "../assets/excel.svg";
import WorkProcess from "../assets/work-process.svg";

const skillDetail = {
  dev : "Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. ",
  scrap : "Web Scraping shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. ",
  automation : "Automation shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball."
}


// markup
const IndexPage = () => {
  return (
      <Layout>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="relative h-4/5 w-3/5 bg-gray">Reserve for Three js Canvas
            <div className="absolute top-1/3 -left-28"> 
              <h1 className="text-white text-5xl mb-10">
                Hello There.<br/>
                I'm Chayanin<br/>
                Developer / <br/>
                Software Engineer<br/>
              </h1>
              <HiremeButton/>
            </div>
          </div>
        </div>
        <div className="contianer w-full h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white mb-36">What I can Do</h1>
          <div className="container flex flex-wrap justify-between">
            <SkillCard header="Web Development" detail={skillDetail.dev}>
              <Coding className="w-[100px] h-[100px] mb-10"/>
            </SkillCard>
            <SkillCard header="Web Scraping" detail={skillDetail.scrap}>
              <Webdesign className="w-[100px] h-[100px] mb-10"/>
            </SkillCard>
            <SkillCard header="Web Automation" detail={skillDetail.automation}>
              <Automation className="w-[100px] h-[100px] mb-10"/>
            </SkillCard>
          </div>
          <div className="container w-full flex justify-end mt-12">
            <a className="flex text-md text-salmon" href="">
              More on About Me
              <ArrowRightCircle className="w-[20px] h-[20px] ml-2 fill-salmon"/>
            </a>
          </div>
        </div>
        <div className="contianer w-full h-screen flex flex-col items-center">
          <h1 className="text-4xl text-white my-36">My Previous Experience</h1>
          <div className="container flex flex-wrap justify-around px-48">
            <div className="max-w-[350px] max-h-[350px] flex flex-wrap justify-between items-center p-5">
              <ProcessAutomation className="w-[100px] h-[100px] m-5"/>
              <WorkProcess className="w-[100px] h-[100px] m-5"/>
              <BusinessReport className="w-[100px] h-[100px] m-5"/>
              <Excel className="w-[100px] h-[100px] m-5"/>
            </div>
            <div className="max-w-md">
              <h2 className="text-xl font-bold text-white mb-5">RPA Developer</h2>
              <p className="text-gray">
                Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. 
              </p>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default IndexPage
