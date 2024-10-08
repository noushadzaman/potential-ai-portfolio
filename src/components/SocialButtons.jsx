import { socialLinks } from "@/constants"

const SocialButtons = () => {
    return (
        <div className='flex gap-[25px]'>
            {
                socialLinks.map(link => (
                    <a
                        key={link.url}
                        href={link.url} target='_blank'>
                        <img src={link.logo} alt="Facebook" />
                    </a>
                ))
            }
        </div>
    )
}

export default SocialButtons