
const Intro = ({ title, subtitle, align }) => {
    return (
        <div className={`text-${align}`}>
            <h2 className='font-[600] text-[65px] leading-[97.5px]'>{title}</h2>
            <p className='font-[400] text-[21px] leading-[31.5px] max-w-2xl mt-[15px]'>{subtitle}</p>
        </div>
    )
}

export default Intro