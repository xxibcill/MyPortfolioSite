import * as React from "react"

type SkillCardProps = {
    children: React.ReactNode ,
    header: string ,
    detail: string,
    href: string
};

const SkillCard = ({ children ,header ,detail ,href }: SkillCardProps) => {
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
            z-20
        "
        >
            {children}
            <h2 className="text-white text-base lg:text-xl mb-5 mt-2">{header}</h2>
            <p className="text-sm lg:text-base mb-3 font-normal text-gray-400">
                {detail}
            </p>
            <a href={href} target="_blank" className="text-sm lg:text-base mt-3 font-light text-gray-400" >สามารถชมผลงามเพิ่มเติมได้ที่นี่</a>
        </div>
    ) as any as JSX.Element
}

export default SkillCard;