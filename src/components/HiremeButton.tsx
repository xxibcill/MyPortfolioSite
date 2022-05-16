import * as React from "react"

const HiremeButton = () => {
    return (
        <button 
            type="button" className="
            text-white 
            bg-secondary
            hover:bg-secondary-highlight 
            hover:font-bold
            font-medium 
            rounded-md 
            text-md 
            w-32
            py-2 
            outline-none 
            shadow-md
            "
        >
            Offer me JOB!
        </button>
    ) as any as JSX.Element
}

export default HiremeButton;