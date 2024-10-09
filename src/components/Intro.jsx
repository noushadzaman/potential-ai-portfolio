import clsx from "clsx"

const Intro = ({ title, subtitle, center }) => {
    return (
        <div className={clsx(center && "flex flex-col items-center")}>
            <h2 className={`font-[600] text-center text-[45px] lg:text-[65px] leading-[67.5px] lg:leading-[97.5px]`}>{title}</h2>
            <p className={clsx(`max-w-3xl font-[400] text-[19px] lg:text-[21px] leading-[28.5px] lg:leading-[31.5px] mt-[8px] lg:mt-[15px]`, center && 'text-center')}>{subtitle}</p>
        </div>
    )
}

export default Intro