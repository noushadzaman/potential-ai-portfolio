import Button from "@/components/Button"
import Intro from "@/components/Intro"
import { Input } from "@/components/ui/input"

const Contact = () => {

  return (
    <section id="contact">
      <Intro
        title={"Lets Design Together"}
        subtitle={"Join me in crafting innovative designs that elevate your brand. Together, we’ll create user-centered solutions that inspire."}
        center={true}
      />

      <div className="flex max-lg:items-center gap-[15px] lg:gap-[25px] max-w-[874px] mx-auto mt-[50px] lg:mt-[90px]">
        <Input placeholder="Enter Your Email" />
        <Button label={"Contact Me"} />
      </div>
    </section>
  )
}

export default Contact