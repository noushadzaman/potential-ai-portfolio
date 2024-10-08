import Button from "./Button"
import Logo from "./Logo"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <header className='flex items-center justify-between max-w-[1420px] mx-auto pt-[61px]'>
            {/* Logo */}
            <Logo />

            {/* navigation btns */}
            <div className='flex gap-[24px] items-center'>
                <Navbar />
                <Button label={"Downlaod CV"} />
            </div>
        </header>
    )
}

export default Header