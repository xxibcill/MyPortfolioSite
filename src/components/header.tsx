import * as React from "react"
import MenuIcon from "../assets/svg/hamburger-menu.svg"
import { Link } from "gatsby"

type HeaderProps = {
    message: string;
};

const Header : React.FunctionComponent<HeaderProps> = (props) => {
    return (
        <header className="bg-primary-blend-dark px-4 md:px-4 py-4 md:py-2 fixed top-0 left-0 right-0 z-40">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link 
                to="/" 
                className="text-white lg:text-lg sm:text-sm md:text-md" 
            >
                Chayanin<br/>Chanthananond
            </Link>
            {/* <nav className="flex">
                    <MenuIcon className="w-[30px] h-[30px] m-[10px] fill-white lg:hidden"/>
            </nav> */}
            </div>
        </header> 
    )
}

export default Header;

