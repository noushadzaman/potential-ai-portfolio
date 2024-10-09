import Intro from "@/components/Intro"
import { services } from "@/constants"

const Services = () => {
  return (
    <section
      id="services"
      className="max-w-[1413px] mx-auto"
    >
      <Intro
        title={"Services"}
        subtitle={"I provide UX design, website and app development, and graphic design services, focusing on user engagement and effective branding."}
        center={true}
      />
      <div className="mt-[35px] lg:mt-[72px] flex flex-wrap gap-[31px] tracking-[0.03em] justify-center">
        {
          services.map(service => <div
            key={service.title}
            className="px-[18px] py-[57px] bg-s7 rounded-[14px] max-w-[330px]"
          >
            <img className="h-[70px]" src={service.logo} alt={service.title} />
            <h3 className="mt-[17px] font-[600] text-[32px] leading-[48px]">{service.title}</h3>
            <p className="mt-[15px] font-[400] text-[19px] leading-[28.5px]">{service.subtitle}</p>
          </div>)
        }
      </div>
    </section>
  )
}

export default Services