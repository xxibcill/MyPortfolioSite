import * as React from "react"
import Header from "../components/header"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-primary h-fit">
            <Header message="Hello"/>
            {children}
        </div>
    )
}

export default Layout