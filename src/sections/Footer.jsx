import Logo from "@/components/Logo"
import Navbar from "@/components/Navbar"
import SocialButtons from "@/components/SocialButtons"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center pt-[55px] lg:pt-[109px]">
      <Logo />
      <div className="mt-[35px] lg:mt-[65px]">
        <Navbar />
      </div>
      <div className="mt-[40px] lg:mt-[80px]">
        <SocialButtons />
      </div>
      <div className="mt-[30px] lg:mt-[62px] bg-s4 w-full">
        <p className="py-[26px] text-center font-[400] text-[14px] lg:text-[21px] leading-[31.5px] tracking-[0.03em] text-white max-md:px-[20px]">© 2023
          <span className="font-[700] text-p1">
            {' '}Mumair{' '}
          </span>
          All Rights Reserved , Inc.</p>
      </div>
    </footer>
  )
}

export default Footer