import LogoIcon from '../assets/logo.png'

const Logo = ({ isOpen, setIsOpen }) => {

    return (
        <>
            <a
                href='/'
                className='max-lg:hidden flex gap-[10px] md:gap-[15px] xl:gap-[20px] items-center'>
                <img className='w-[40px] md:w-[45px] xl:w-[67px]' src={LogoIcon} alt="logo" />
                <p className='font-montserrat text-[28px] md:text-[35px] xl:text-[48px] leading-5 lg:leading-[58.51px] text-s4 font-[400]'>
                    <span className='font-[700] text-s2'>M</span>
                    umair
                </p>
            </a>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='flex lg:hidden gap-[10px] md:gap-[15px] xl:gap-[20px] items-center'>
                <img className='w-[40px] md:w-[45px] xl:w-[67px]' src={LogoIcon} alt="logo" />
                <p className='font-montserrat text-[28px] lg:text-[48px] leading-5 lg:leading-[58.51px] text-s4 font-[400]'>
                    <span className='font-[700] text-s2'>M</span>
                    umair
                </p>
            </button>
        </>
    )
}

export default Logo