import Logo from "@/components/Logo"
import Navbar from "@/components/Navbar"
import SocialButtons from "@/components/SocialButtons"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center pt-[109px]">
      <Logo />
      <div className="mt-[65px]">
        <Navbar />
      </div>
      <div className="mt-[80px]">
        <SocialButtons />
      </div>
      <div className="mt-[62px] bg-s4 w-full">
        <p className="py-[26px] text-center font-[400] text-[21px] leading-[31.5px] tracking-[0.03em] text-white">© 2023
          <span className="font-[700] text-p1">
            {' '}Mumair{' '}
          </span>
          All Rights Reserved , Inc.</p>
      </div>
    </footer>
  )
}

export default Footer