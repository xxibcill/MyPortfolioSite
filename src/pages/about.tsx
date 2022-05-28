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
              src="../images/profile.jpg" 
              alt="Profile Picture" 
              className=" w-[150px] h-[150px] mb-10 p-5 md:w-[240px] md:h-[240px] lg:w-[350px] lg:h-[350px] flex flex-wrap justify-between items-center" 
            />
            <div className="max-w-sm px-5 lg:max-w-xl">
              <h2 className="text-white text-lg font-regular mb-5 lg:text-2xl ">
                ชญานิน จัทนานนท์ <br/>
                Chayanin Chanthananond<br/>
              </h2>
              <p className="text-gray text-sm lg:text-base">
              สวัสดีครับ ผมชื่อเจ เกิดที่จังหวัดนครราชสีมาเมื่อปี 1997 ปัจจุบันอายุ 24 ปีเริ่มเขาใกล้ 25 แล้ว เรียนจบจากสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ในปี 2020 ชอบคอมพิวเตอร์มาตั้งแต่สมัยเด็ก สมัยเรียนอยู่ชั้นประถมก็ได้นั่งหน้าจอคอมเล่นเกมแล้ว สมัยที่ยังใช้อินเตอร์เน็ตแบบ dial พอโตขึ้นมาหน่อยก็ได้ดูหนังเรื่อง  The Internship (2013) ที่เกี่ยวกับการฝึกงานที่ google ก็เลยมีความตั้งใจที่จะทำงานในบริษัทไอทีตั้งแต่ตอนนั้นมา ตอนม.ปลาย ได้มีโอกาศเข้าค่ายโอลิมปิกวิชาการ (สอวน.) สาขาฟิสิกส์ เพราะตอนนั้นเริ่มหลงใหลฟิสิกส์และคณิตศาสตร์ ผ่านไปได้จนถึงการแข่งขันฟิสิกส์โอลิมปิกระดับชาติ (TPhO) พอจบม.6 จึงตัดสินใจเข้าเรียนวิศวกรรมคอมพิวเตอร์
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
                ตอนเด็กๆ สมัยประถมเวลาที่ต้องอยู่บ้านคนเดียว ไม่มีใครทำอาหารให้กิน ก็เลยต้องทำกินเอง บ่อยๆครั้งนานไป ก็สามารถทำได้หลายหลายเมนูมากขึ้น ใส่ใจในรายละเอียดของรสชาติ หน้าตาความน่ากิน เวลาที่ไปทานอาหารนอกบ้าน ได้เจอกับอาหารที่หลากหลาย ก็เลยมีความสนใจเกี่ยวกับอาหารและเครื่องดื่มในหลายด้าน กระบวนการปรุง วัตถุดิบ หน้าตา รสชาติ หรือแม้แต่ branding ของร้านอาหาร
              </p>
            </div>
          </div>
          <div className="interest-card-container self-start">
            <Mathematics className="interest-card-icon"/>
            <div className="max-w-xl">
              <h2 className="interest-card-header">{"Mathematics"}</h2>
              <p className="text-gray text-sm lg:text-base">
                "The laws of Nature are written in the language of mathematics" Galileo Galilei คณิตศาสตร์อาจเป็นสิ่งที่เกลียดสำหรับใครหลายคน อาจะเป็นเพราะมันไม่ได้ถูกนำเสนอในแบบที่เข้าถึงได้ง่าย ไม่ค่อยมีใครแสดงให้เห็นถึงความสวยงามของมันให้คนทั่วไปได้เห็นกันมากนัก ทั้งยังรูปแบบการสอนในโรงเรียนเป็นแบบจำสูตร หรือแค่ใช้มันเป็นแค่เครื่องมือซะส่วนใหญ่ แต่ถ้ามันถูกแสดงให้คนสามารถได้เห็นถึงความสวยงานจริงๆของมัน คนๆนั้นก็จะสามารถรักคณิตศาสตร์ได้
              </p>
            </div>
          </div>
          <div className="interest-card-container self-end">
            <Design className="interest-card-icon"/>
            <div className="max-w-xl">
              <h2 className="interest-card-header">{"Art & Design"}</h2>
              <p className="text-gray text-sm lg:text-base">
                พอได้มาเรียนวิชา UX/UI design ในคลาสเรียนของมหาวิทยาลัย ทำให้ได้เห็นความพยายามและกระบวนการทำงานของนักออกแบบ หลังจากนั้นก็มองสิ่งสิ่งรอบตัวเปลี่ยนไป ไม่ว่าจะเป็น UI ของ app ต่างๆ หรือสิ่งของ  แพ็กเกจ สถาปัตยกรรม ทุกอย่างจำเป็นต้องมี designer มาออกแบบโดนคิดถึงการใช้งานเป็นหลัก
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
