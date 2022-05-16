import * as React from "react"

// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
    message: string;
}; /* use `interface` if exporting so that consumers can extend */

const Header = ({ message }: AppProps) => {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
            <button 
                type="button" className="
                text-white 
                bg-blue-700 
                hover:bg-blue-800 
                focus:ring-4 
                focus:ring-blue-300 
                font-medium 
                rounded-lg 
                text-sm 
                px-5 
                py-2.5 
                mr-2 
                mb-2 
                dark:bg-blue-600 
                dark:hover:bg-blue-700 
                focus:outline-none 
                dark:focus:ring-blue-800">
                    Default
            </button>
        </nav> 
    ) as any as JSX.Element
}

export default Header;

