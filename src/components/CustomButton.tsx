import * as React from "react"
import { Link } from "gatsby"

interface HiremeButtonProps {
    text: String
    isHiddenOnMobile?: Boolean;
}

const HiremeButton : React.FunctionComponent<HiremeButtonProps> = (props) => {
    return (
        <Link 
            to="/about"
            className={`text-white bg-secondary hover:bg-secondary-highlight  hover:font-bold font-medium  rounded-md  text-md  w-fit px-2.5 py-2  outline-none  shadow-md ${props.isHiddenOnMobile? "hidden lg:block" : ""}`}
        >
            {props.text}
        </Link>
    )
}


HiremeButton.defaultProps = {
    isHiddenOnMobile: false
};

export default HiremeButton;