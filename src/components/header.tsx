import * as React from "react"
import HiremeButton from './HiremeButton'
import MenuIcon from "../assets/svg/hamburger-menu.svg"

// Declaring type of props - see "Typing Component Props" for more examples
type HeaderProps = {
    message: string;
}; /* use `interface` if exporting so that consumers can extend */

const Header : React.FunctionComponent<HeaderProps> = (props) => {
    return (
        <header className="bg-white px-2 sm:px-4 py-2.5 dark:bg-dark fixed top-0 left-0 right-0 z-40">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#">
                    <a className="text-white lg:text-lg sm:text-sm md:text-md" >Chayanin<br/>Chanthananond</a>
                </a>
                <nav className="flex">
                    <HiremeButton isHiddenOnMobile/>
                    <MenuIcon className="w-[30px] h-[30px] m-[10px] fill-white"/>
                </nav>
            </div>
        </header> 
    )
}

export default Header;

