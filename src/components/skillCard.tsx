import * as React from "react"

const SkillCard = ({ children ,header ,detail }: { children: React.ReactNode ,header :String ,detail :String }) => {
    return (
        <div className="max-w-sm bg-card-dark rounded-lg shadow-md flex flex-col justify-center items-center h-[480px] px-10">
            {children}
            <h2 className="text-white text-xl mb-5">{header}</h2>
            <p className="mb-3 font-normal text-gray-400">
                {detail}
            </p>
        </div>
    ) as any as JSX.Element
}

export default SkillCard;