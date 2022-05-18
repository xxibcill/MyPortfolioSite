import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"


const skillDetail = {
  dev : "Prosciutto shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. ",
  scrap : "Web Scraping shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball. ",
  automation : "Automation shankle shank chislic landjaeger boudin biltong jowl chicken pork. Sirloin chuck ham hock pork, cupim burgdoggen cow strip steak meatloaf brisket tenderloin tri-tip kielbasa. Ground round pork belly corned beef meatball."
}


// markup
const AboutMe = () => {
  return (
      <Layout>
        <div className="container flex flex-col h-screen mx-auto ">
          <h1 className="text-3xl text-white font-light pl-24 mt-36 mb-24">Who Am I</h1>
          <div className="container flex flex-wrap justify-around items-center px-48">
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
        <div className="container flex flex-col h-screen mx-auto ">
          <h1 className="text-3xl text-white font-light pl-24 mt-36 mb-24">Interest</h1>
        </div>
      </Layout>
  )
}

export default AboutMe
