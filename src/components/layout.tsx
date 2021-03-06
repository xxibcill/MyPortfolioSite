import * as React from "react"
import Header from "../components/header"
import Footer from "./footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-dark h-fit font-pridi">
            <Header message="Hello"/>
            {/* for measure height of header */}
            {/* <div className="bg-white py-2">
                <a className="lg:text-lg sm:text-sm md:text-md" >x<br/>x</a>
            </div>  */}
            {children}
            <Footer/>
        </div>
    )
}

export default Layout