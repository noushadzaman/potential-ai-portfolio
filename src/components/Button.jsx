
const Button = ({ href, label, extraClasses }) => {


    return href ? (
        <a
            href={href}
            className={`font-[400] text-[21px] leading-[31.5px] tracking-[0.03em] py-[10px] px-[14px] ${extraClasses}`}
        >{label}</a>
    ) :
        (
            <button className={`bg-p1 text-white rounded-[5px] font-[400] text-[21px] leading-[31.5px] tracking-[0.03em] px-[18px] pt-[17px] pb-[18px] min-w-[188px] ${extraClasses}`}>{label}</button>
        )
}

export default Button