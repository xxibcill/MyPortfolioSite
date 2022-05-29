import * as React from "react"
import CustomButton from './CustomButton'
import Github from "../assets/svg/github.svg"
import Linkedin from "../assets/svg/linkedin.svg"
import Facebook from "../assets/svg/facebook.svg"
import Instagram from "../assets/svg/instagram.svg"
import Twitter from "../assets/svg/twitter.svg"

// Declaring type of props - see "Typing Component Props" for more examples
type FooterProps = {
    // message: string;
}; /* use `interface` if exporting so that consumers can extend */

const Footer : React.FunctionComponent<FooterProps> = (props) => {
    return (
        <footer className="bg-tertiary w-full h-10 lg:h-20 flex justify-center items-center">
           <a href="https://github.com/xxibcill" target="_blank">
            <Github className="w-[16px] h-[16px] lg:w-[25px] lg:h-[25px] mx-4" />
           </a>
           <a href="https://www.linkedin.com/in/chayanin-chan" target="_blank">
            <Linkedin className="w-[16px] h-[16px] lg:w-[25px] lg:h-[25px] mx-4" />
           </a>
           <a href="https://www.facebook.com/ch.chayanin" target="_blank">
            <Facebook className="w-[16px] h-[16px] lg:w-[25px] lg:h-[25px] mx-4" />
           </a>
           <a href="https://www.instagram.com/xxibcill/" target="_blank">
            <Instagram className="w-[16px] h-[16px] lg:w-[25px] lg:h-[25px] mx-4" />
           </a>
           <a href="https://twitter.com/xxibcill" target="_blank">
            <Twitter className="w-[16px] h-[16px] lg:w-[25px] lg:h-[25px] mx-4" />
           </a>
        </footer> 
    )
}

export default Footer;

