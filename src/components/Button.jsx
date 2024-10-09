import clsx from "clsx"

const Button = ({ href, label, className, btnType, active, onClose }) => {

    return href ? (
        <a
            onClick={onClose ? onClose : null}
            href={href}
            className={`font-[400] text-[21px] leading-[31.5px] tracking-[0.03em] py-[10px] px-[14px] ${className}`}
        >{label}</a>
    ) :
        (
            btnType === 'secondary' ?
                <button
                    className={clsx(`px-[15px] lg:px-[20px] lg:py-[10px] rounded-[12px] font-[400] text-[15px] lg:text-[24px] tracking-[0.03em] leading-[36px] border-s4 shadow-[0_0_0_0.4px_black] shrink-0 ${className}`, active ? 'bg-p1 text-white' : 'bg-s7')}
                >{label}</button> :

                <button
                    className={`bg-p1 text-white rounded-[5px] font-[400] text-[14px] lg:text-[21px] leading-3 lg:leading-[31.5px] tracking-[0.03em] px-[12px] lg:px-[18px] pt-[17px] pb-[18px] lg:min-w-[188px] shrink-0 ${className}`}
                >{label}</button>
        )
}

export default Button