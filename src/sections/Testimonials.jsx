import EmblaCarousel from "@/components/EmblaCarousel";
import Intro from "@/components/Intro"
import { testimonials } from "@/constants"

const Testimonials = () => {

    return (
        <section id="testimonials" className="flex flex-col items-center">
            <Intro
                title={"Testimonials"}
                subtitle={"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"}
                center={true}
            />
            <EmblaCarousel slides={testimonials} options={{ loop: true }} />
        </section>
    )
}

export default Testimonials