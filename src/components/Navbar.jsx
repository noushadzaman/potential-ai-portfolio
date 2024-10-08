import { navLinks } from '../constants'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className='flex gap-[12px] items-center'>
            {
                navLinks.map(link => <Button
                    key={link.label}
                    href={link.href}
                    label={link.label}
                />)
            }
        </nav>
    )
}

export default Navbar