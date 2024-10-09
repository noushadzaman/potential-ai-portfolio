import Intro from '@/components/Intro'
import AboutImg from '../assets/about-image.webp'
import Skill from '../components/Skill'

const About = () => {

    return (
        <section
            id="about-me"
            className='flex max-lg:flex-col-reverse justify-center items-center gap-[33.24px] max-w-[1470px] mx-auto'
        >
            {/* skills div (right side) */}
            <div className='relative max-w-[681px]'>
                <img src={AboutImg} alt="Umair image" />
                <div className='w-[290px] lg:w-[374px] h-[65px] lg:h-[83px] bg-[#FD6F00] opacity-[60%] absolute 
                top-[58px] sm:top-[100px] md:top-[110px] lg:top-[60px] xl:top-[111px] 
                right-[55px] sm:right-[165px] md:right-[190px] lg:right-[50px] xl:right-[153px]' />
            </div>

            <div className='tracking-[0.03em]'>
                {/* img div (left side) */}
                <Intro
                    title={"About Me"}
                    subtitle={"I am a dedicated designer specializing in UX, website, and app design. I create user-friendly experiences that combine functionality with aesthetic appeal."}
                />
                <div className='mt-[15px] space-y-[10px] lg:space-y-[25px]'>
                    <Skill label={"UX"} value={80} />
                    <Skill label={"Website Design"} value={90} />
                    <Skill label={"App Design"} value={100} />
                    <Skill label={"Graphic Design"} value={80} />
                </div>
            </div>
        </section>
    )
}

export default About