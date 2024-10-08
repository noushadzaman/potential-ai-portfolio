import Button from "@/components/Button"
import Intro from "@/components/Intro"
import { Input } from "@/components/ui/input"

const Contact = () => {

  return (
    <section id="contact">
      <Intro
        title={"Lets Design Together"}
        subtitle={"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"}
        center={true}
      />

      <div className="flex gap-[25px] max-w-[874px] mx-auto mt-[90px]">
        <Input placeholder="Enter Your Email" />
        <Button label={"Contact Me"} />
      </div>
    </section>
  )
}

export default Contact