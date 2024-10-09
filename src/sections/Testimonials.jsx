import EmblaCarousel from "@/components/EmblaCarousel";
import Intro from "@/components/Intro"
import { testimonials } from "@/constants"

const Testimonials = () => {

    return (
        <section id="testimonials" className="flex flex-col items-center">
            <Intro
                title={"Testimonials"}
                subtitle={"Clients praise my work for its creativity and user focus, highlighting the positive impact on their brand and user engagement."}
                center={true}
            />
            <EmblaCarousel slides={testimonials} options={{ loop: true }} />
        </section>
    )
}

export default Testimonials