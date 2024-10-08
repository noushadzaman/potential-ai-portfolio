import Intro from '@/components/Intro'
import AboutImg from '../assets/about-image.png'
import Skill from '../components/Skill'

const About = () => {

    return (
        <section
            id="about-me"
            className='flex justify-center items-center gap-[33.24px] max-w-[1470px] mx-auto'
        >
            {/* img div (left side) */}
            <div className='relative max-w-[681px]'>
                <img src={AboutImg} alt="Umair image" />
                <div className='w-[374px] h-[83px] bg-[#FD6F00] opacity-[60%] absolute top-[111px] right-[153px]' />
            </div>

            {/* skills div (right side) */}
            <div className='tracking-[0.03em]'>
                <Intro
                    title={"About Me"}
                    subtitle={"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra"}
                />
                <div className='mt-[15px] space-y-[25px]'>
                    <Skill label={"UX"} value={80} />
                    <Skill label={"Website Design"} value={90} />
                    <Skill label={"App Design"} value={70} />
                    <Skill label={"Graphic Design"} value={100} />
                </div>
            </div>
        </section>
    )
}

export default About