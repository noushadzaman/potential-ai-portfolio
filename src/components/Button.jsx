import clsx from "clsx"

const Button = ({ href, label, extraClasses, btnType, active }) => {


    return href ? (
        <a
            href={href}
            className={`font-[400] text-[21px] leading-[31.5px] tracking-[0.03em] py-[10px] px-[14px] ${extraClasses}`}
        >{label}</a>
    ) :
        (
            btnType === 'secondary' ?
                <button
                    className={clsx(`px-[20px] py-[10px] rounded-[12px] font-[400] text-[24px] tracking-[0.03em] leading-[36px] border-s4 shadow-[0_0_0_0.4px_black] ${extraClasses}`, active ? 'bg-p1 text-white' : 'bg-s7')}
                >{label}</button> :

                <button
                    className={`bg-p1 text-white rounded-[5px] font-[400] text-[21px] leading-[31.5px] tracking-[0.03em] px-[18px] pt-[17px] pb-[18px] min-w-[188px] ${extraClasses}`}
                >{label}</button>

        )
}

export default Button