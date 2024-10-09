import { navLinks } from '../constants'
import Button from './Button'

const Navbar = ({ onClose }) => {


    return (
        <nav className='flex max-lg:flex-col gap-[12px] items-center'>
            {
                navLinks.map(link => <Button
                    onClose={onClose}
                    key={link.label}
                    href={link.href}
                    label={link.label}
                />)
            }
        </nav>
    )
}

export default Navbar