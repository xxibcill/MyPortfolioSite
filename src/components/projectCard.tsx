import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ProjectCard = ({ topic ,detail ,url }: {topic :String ,detail :String ,url :String}) => {
    return (
        <div className="w-[800px] h-[400px] rounded-lg shadow-sm flex flex-col justify-center items-center relative">
            <StaticImage 
                src={'../images/recipe.jpg'}
                alt={"alt"}
                className="w-full h-full rounded-lg"
            />
            <div className="absolute bottom-5 left-5 w-1/2 h-1/2 bg-see-through/50 rounded-lg px-12 py-5">
                <h2 className="text-white text-4xl mb-1">
                    Recipe Searching
                </h2>
                <p className="text-white text-md mb-5">
                    searching best recipe for meal <br/>by just enter your favorite ingredient
                </p>
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
                    Open App
                </button>
            </div>
        </div>
    ) as any as JSX.Element
}

export default ProjectCard;