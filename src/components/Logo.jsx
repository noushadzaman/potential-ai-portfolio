import LogoIcon from '../assets/logo.png'

const Logo = () => {
    return (
        <a
            href='/'
            className='flex gap-[20px]'>
            <img height={67} width={67} src={LogoIcon} alt="logo" />
            <p className='font-montserrat text-[48px] leading-[58.51px] text-s4 font-[400]'>
                <span className='font-[700] text-s2'>M</span>
                umair
            </p>
        </a>
    )
}

export default Logo