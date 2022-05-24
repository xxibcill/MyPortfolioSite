import * as React from "react"
import CustomButton from './CustomButton'
import MenuIcon from "../assets/svg/hamburger-menu.svg"

// Declaring type of props - see "Typing Component Props" for more examples
type FooterProps = {
    // message: string;
}; /* use `interface` if exporting so that consumers can extend */

const Footer : React.FunctionComponent<FooterProps> = (props) => {
    return (
        <footer className="bg-tertiary w-full h-20">
           
        </footer> 
    )
}

export default Footer;

