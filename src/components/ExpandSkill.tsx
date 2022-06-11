import React ,{useState} from "react"

// Declaring type of props - see "Typing Component Props" for more examples
type ExpandSkillProps = {
}; /* use `interface` if exporting so that consumers can extend */

const skillSet = [
    "Three js",
    "SVG animation",
    "Webpack",
    "RegEx",
    "GraphQL",
    "Redux",
    "D3",
    "Solidity",
    "Web3js",
    "Unity Engine",
    "GLSL"
]

const ExpandSkill : React.FunctionComponent<ExpandSkillProps> = (props) => {
    const  [isActive,setIsActive] = useState(false)

    return (
        <>
            <h2 
                className="w-full text-center text-sm text-gray-dark font-light my-12 cursor-pointer"
                onClick={() => setIsActive(true)}
            >
                some small skill I have but not neccessory for you to know
                if you curious to know. click here to expand
            </h2>
            <div className={`expandable ${isActive ? "expandable--active" : ""} flex items-center justify-center`}>
                <div className="flex flex-row justify-around w-fit lg:w-1/2">
                    <ul className="text-sm mx-10 lg:text-base">
                        {(skillSet.slice(0,Math.ceil(skillSet.length/2)).map((skill) =>  (<li className="my-2" key={skill}>{skill}</li>)))}
                    </ul>
                    <ul className="text-sm mx-10 lg:text-base">
                        {(skillSet.slice(Math.ceil(skillSet.length/2),skillSet.length-1).map((skill) =>  (<li className="my-2" key={skill}>{skill}</li>)))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ExpandSkill;

