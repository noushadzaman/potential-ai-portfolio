import { useState } from 'react';
import Button from "./Button"
import Logo from "./Logo"
import Navbar from "./Navbar"
import { X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeNav = () => {
        setIsOpen(false)
    }

    return (
        <header className='relative flex items-center justify-between max-w-[1420px] mx-auto pt-[20px] lg:pt-[61px] max-lg:px-[16px]'>
            {/* Logo */}
            <Logo isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* mobile nav */}
            {
                isOpen && <div className='max-lg:absolute h-[100vh] bg-p2 w-full top-0 right-0 z-20 pt-[150px]'>
                    <X
                        onClick={closeNav}
                        className='absolute top-[50px] right-[50px] cursor-pointer w-[35px] h-[35px]'
                    />
                    <Navbar onClose={closeNav} />
                </div>
            }

            {/* navigation btns */}
            <div className='flex gap-[24px] items-center'>
                <div className="max-lg:hidden">
                    <Navbar />
                </div>
                <Button label={"Downlaod CV"} />
            </div>
        </header>
    )
}

export default Header