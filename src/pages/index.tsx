import * as React from "react"
import Layout from "../components/layout"
import CustomButton from '../components/CustomButton'
import SkillCard from "../components/skillCard"
import Coding from "../assets/svg//coding.svg";
import Webdesign from "../assets/svg//webdesign.svg";
import Automation from "../assets/svg//automation.svg";
import ArrowRightCircle from "../assets/svg//arrow-right-circle.svg";
import ProcessAutomation from "../assets/svg//process-automation.svg";
import BusinessReport from "../assets/svg//business-report.svg";
import Excel from "../assets/svg//excel.svg";
import WorkProcess from "../assets/svg//work-process.svg";

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
          <div className="relative h-4/5 w-4/5 lg:h-4/5 lg:w-3/5 bg-gray">Reserve for Three js Canvas
            <div className="absolute top-1/2 lg:top-1/3 left-5 lg:-left-28"> 
              <h1 className="text-white text-3xl lg:text-5xl mb-10">
                Hello There.<br/>
                I'm Chayanin<br/>
                Developer / <br/>
                Software Engineer<br/>
              </h1>
              <div className="flex justify-center">
                <CustomButton text={"About Me"}/>
              </div>
            </div>
          </div>
        </div>
        <div className="contianer w-full h-fit px-5 py-10 lg:p-0 lg:h-screen flex flex-col justify-center items-center">
          {/* <h1 className="text-4xl text-white mb-36">What I can Do</h1> */}
          <div className="container flex flex-wrap justify-center lg:justify-between items-center">
            <SkillCard header="Web Development" detail={skillDetail.dev}>
              <Coding className="skill-icon"/>
            </SkillCard>
            <SkillCard header="Web Scraping" detail={skillDetail.scrap}>
              <Webdesign className="skill-icon"/>
            </SkillCard>
            <SkillCard header="Web Automation" detail={skillDetail.automation}>
              <Automation className="skill-icon"/>
            </SkillCard>
          </div>
          <div className="container w-full flex justify-end mt-4 px-8 lg:mt-12 lg:px-0">
            <a className="flex text-sm lg:text-md text-link-highlight" href="">
              More on About Me
              <ArrowRightCircle className="w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] mt-[2px] lg:mt-0 ml-2 fill-link-highlight"/>
            </a>
          </div>
        </div>
        <div className="container static flex flex-col justify-center h-fit px-5 py-10 lg:p-0 lg:h-screen mx-auto">
          <h1 className="text-white w-full text-center my-6 text-xl lg:text-left lg:text-4xl lg:mb-36 z-20">Experience</h1>
          <div className="w-full flex justify-between">
            <div className="w-full lg:w-1/3 flex flex-col items-center justify-center z-20">
              <div className="exp-card">
                <h4 className="text-sm text-gray">{"June 2019 - August 2019"}</h4>
                <h2 className="text-xl mt-2 mb-4 text-white">{"Frontend Developer (Intern) at KBTG"}</h2>
                <p className="text-md text-gray-400">{"Work on Internal project using React and Redux , the project is implement some feature of basic CRM.I'm responsible for create UI using React and design using Adobe XD."}</p>
              </div>
              <div className="exp-card">
                <h4 className="text-sm text-gray">{"June 2020"}</h4>
                <h2 className="text-xl mt-2 mb-4 text-white">{"Graduated from KMITL"}</h2>
                <p className="text-md text-gray-400">{"Bachelor of Engineering Program in Computer Engineering"}</p>
              </div>
              <div className="exp-card">
                <h4 className="text-sm text-gray">{"June 2020 - April 2022"}</h4>
                <h2 className="text-xl mt-2 mb-4 text-white">{"RPA Developer at Round 2 Solutions"}</h2>
                <p className="text-md text-gray-400">{"Work on Internal project using React and Redux , the project is implement some feature of basic CRM.I'm responsible for create UI using React and design using Adobe XD."}</p>
              </div>
            </div>
            <canvas className="hidden lg:block w-1/2 h-[700px] bg-gray-dark z-20"></canvas>
          </div>
        </div>
        <div className="container static flex flex-col justify-center h-fit px-5 py-10 lg:p-0 lg:h-screen mx-auto">
        {/* <div className="contianer w-full h-screen flex flex-col justify-center items-center"> */}
          {/* <h1 className="text-white w-full text-center my-6 text-xl lg:text-left lg:text-4xl lg:mb-36 z-20">My Previous Experience</h1> */}
          <h1 className="text-white my-6 text-xl lg:text-4xl lg:mb-36">My Previous Experience</h1>
          <div className="container flex flex-wrap justify-around">
            <div className="w-full h-fit lg:w-[400px] lg:h-[300px] flex flex-wrap justify-center ">
              <div className="max-w-[250px] max-h-[50px] flex flex-wrap justify-around items-center p-2 lg:p-5 lg:max-w-[450px] lg:max-h-[350px]">
                <ProcessAutomation className="w-[30px] h-[30px] lg:w-[100px] lg:h-[100px] mx-4 mb-1 lg:mb-10"/>
                <WorkProcess className="w-[30px] h-[30px] lg:w-[100px] lg:h-[100px] mx-4 mb-1 lg:mb-10"/>
              </div>
              <div className="hidden max-w-[250px] max-h-[50px] lg:max-w-[450px] lg:max-h-[350px] lg:flex lg:flex-wrap justify-around items-center p-5">
                <BusinessReport className="lg:w-[100px] lg:h-[100px] mx-4 mb-1 lg:mb-10 "/>
                <Excel className="lg:w-[100px] lg:h-[100px] mx-4 mb-1 lg:mb-10 "/>
              </div>
            </div>
            <div className="lg:max-w-md p-5 lg:p-0">
              <h2 className="text-white lg:text-xl font-regular mb-5">RPA Developer at Round2 Solutions</h2>
              <p className="text-gray text-sm lg:text-base">
                Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. 
              </p>
              <div className="flex justify-center mt-11">
                <CustomButton text={"More on About Me"}/>
              </div>
            </div>
            <div className="max-w-[250px] max-h-[50px] lg:max-w-[450px] lg:max-h-[350px] flex flex-wrap justify-between items-center p-5">
              <BusinessReport className="w-[30px] h-[30px] lg:hidden mx-4 mb-1 lg:mb-10 "/>
              <Excel className="w-[30px] h-[30px] lg:hidden mb-1 mx-4 lg:mb-10 "/>
            </div>
          </div>
        </div>
      </Layout>
  )
}

export default IndexPage;
