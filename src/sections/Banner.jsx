import BannerImg from '../assets/banner-image.png'
import FacebookIcon from '../assets/icons/Facebook.png'
import TwitterIcon from '../assets/icons/Twitter.png'
import InstagramIcon from '../assets/icons/Instagram.png'
import LinkedInIcon from '../assets/icons/LinkedIn.png'
import Button from '../components/Button'

const Banner = () => {
    return (
        <section
            id="home"
            className="flex gap-[148px] items-center justify-center"
        >
            {/* banner intros (left side) */}
            <div className='tracking-[0.03em]'>
                <p className='font-[600] text-[24px] leading-[36px]'>Hi I am </p>
                <h2 className='text-[#FD6F00] text-[32px] leading-[48px] mt-[6px]'>Muhammad Umair</h2>
                <h1 className='text-[100px] font-[700] leading-[120px]'>UI & UX<br /><span>Designer </span></h1>
                <p className='font-[400] text-[21px] leading-[31.5px] max-w-2xl mt-[28px]'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <Button extraClasses="mt-[22px]" label="Hire Me" />
            </div>

            {/* banner img div (right side)*/}
            <div className='flex flex-col items-center gap-[30px]'>
                <div className='relative max-w-[538px]'>
                    <img src={BannerImg} alt="Umair image" />
                    <div className='w-[374px] h-[83px] bg-[#FD6F00] opacity-[60%] absolute top-[78px] right-[82px]' />
                </div>
                <div className='flex gap-[25px]'>
                    <a href="https://www.facebook.com/nowshadbroo" target='_blank'>
                        <img src={FacebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://x.com/Noushad_xaman" target='_blank'>
                        <img src={TwitterIcon} alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com/noushad_ozi" target='_blank'>
                        <img src={InstagramIcon} alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/noushadzaman/" target='_blank'>
                        <img src={LinkedInIcon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Banner