import clsx from "clsx"

const Intro = ({ title, subtitle, center }) => {
    return (
        <div className={clsx(center && "flex flex-col items-center")}>
            <h2 className={`font-[600] text-[65px] leading-[97.5px]`}>{title}</h2>
            <p className={clsx(`max-w-3xl font-[400] text-[21px] leading-[31.5px] mt-[15px]`, center && 'text-center')}>{subtitle}</p>
        </div>
    )
}

export default Intro