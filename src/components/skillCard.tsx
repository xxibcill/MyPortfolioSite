import * as React from "react"

const SkillCard = ({ children ,header ,detail }: { children: React.ReactNode ,header :String ,detail :String }) => {
    return (
        <div className="
            max-w-sm 
            bg-card-dark 
            rounded-lg 
            shadow-md 
            flex 
            flex-col 
            justify-center 
            items-center 
            h-fit 
            lg:h-[480px] 
            p-6
            mx-8
            my-3
            lg:m-0
        "
        >
            {children}
            <h2 className="text-white text-base lg:text-xl mb-5 mt-2">{header}</h2>
            <p className="text-sm lg:text-base mb-3 font-normal text-gray-400">
                {detail}
            </p>
        </div>
    ) as any as JSX.Element
}

export default SkillCard;