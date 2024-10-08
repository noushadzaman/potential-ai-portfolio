import Logo from '../assets/logo.png'
import { navLinks } from '../constants'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between max-w-[1420px] mx-auto py-[61px]'>
            {/* Logo */}
            <a
                href='/'
                className='flex gap-[20px]'>
                <img height={67} width={67} src={Logo} alt="logo" />
                <p className='font-montserrat text-[48px] leading-[58.51px] text-s4 font-[400]'>
                    <span className='font-[700] text-s2'>M</span>
                    umair
                </p>
            </a>

            {/* navigation btns */}
            <div className='flex gap-[24px] items-center'>
                <div className='flex gap-[12px] items-center'>
                    {
                        navLinks.map(link => <Button
                            key={link.label}
                            href={link.href}
                            label={link.label}
                        />)
                    }
                </div>
                <Button label={"Downlaod CV"} />
            </div>
        </nav>
    )
}

export default Navbar