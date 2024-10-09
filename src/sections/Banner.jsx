import SocialButtons from '@/components/SocialButtons'
import BannerImg from '../assets/banner-image.webp'
import Button from '../components/Button'

const Banner = () => {
    return (
        <section
            id="home"
            className="flex max-lg:flex-col gap-[30px] md:gap-[80px] xl:gap-[148px] items-center justify-center"
        >
            {/* banner intros (left side) */}
            <div className='tracking-[0.03em]'>
                <p className='font-[600] text-[18px] lg:text-[24px] leading-[27px] lg:leading-[36px]'>Hi I am </p>
                <h2 className='text-[#FD6F00] text-[24px] lg:text-[32px] leading-[36px] lg:leading-[48px] mt-[2px] lg:mt-[6px]'>Muhammad Umair</h2>
                <div className='text-[75px] lg:text-[100px] font-[700] leading-[90px] lg:leading-[120px] flex flex-col w-full'>
                    <h1>UI & UX</h1>
                    <h1 className='self-end'>Designer </h1>
                </div>
                <p className='font-[400] lg:text-[21px] lg:leading-[31.5px] max-w-2xl mt-[20px] lg:mt-[28px]'>Creative UI/UX Designer skilled in crafting user-centered, visually engaging interfaces. Passionate about enhancing usability and experiences through design, ensuring both functionality and aesthetics.</p>
                <Button className="mt-[17px] lg:mt-[22px]" label="Hire Me" />
            </div>

            {/* banner img div (right side)*/}
            <div className='flex flex-col items-center gap-[30px]'>
                <div className='relative max-w-[538px]'>
                    <img src={BannerImg} alt="Umair image" />
                    <div className='w-[290px] lg:w-[374px] h-[65px] lg:h-[83px] bg-[#FD6F00] opacity-[60%] absolute top-[60px] sm:top-[85px] md:top-[78px] lg:top-[60px] xl:top-[78px] right-[55px] sm:right-[125px] lg:right-[40px] xl:right-[80px]' />
                </div>
                <SocialButtons />
            </div>
        </section>
    )
}

export default Banner