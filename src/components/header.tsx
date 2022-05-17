import * as React from "react"
import HiremeButton from './HiremeButton'

// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
    message: string;
}; /* use `interface` if exporting so that consumers can extend */

const Header = ({ message }: AppProps) => {
    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-dark fixed top-0 left-0 right-0 z-20">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="#">
                    <a className="text-white text-lg" >Chayanin<br/>Chanthananond</a>
                </a>
                <div className="">
                    <HiremeButton/>
                </div>
            </div>
        </nav> 
    ) as any as JSX.Element
}

export default Header;

