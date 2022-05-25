import * as React from "react"

interface HiremeButtonProps {
    text: String
    isHiddenOnMobile?: Boolean;
}

const HiremeButton : React.FunctionComponent<HiremeButtonProps> = (props) => {
    return (
        <button 
            type="button" 
            className={`text-white bg-secondary hover:bg-secondary-highlight  hover:font-bold font-medium  rounded-md  text-md  w-32 py-2  outline-none  shadow-md ${props.isHiddenOnMobile? "hidden lg:block" : ""}`}
        >
            {props.text}
        </button>
    )
}


HiremeButton.defaultProps = {
    isHiddenOnMobile: false
};

export default HiremeButton;