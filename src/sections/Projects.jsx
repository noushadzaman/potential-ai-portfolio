import Button from "@/components/Button"
import Intro from "@/components/Intro"
import ProjectImageOne from "@/components/ProjectImageOne"
import ProjectImageTwo from "@/components/ProjectImageTwo"
import { projectCategories, projects } from "@/constants"

const Projects = () => {

  return (
    <section
      id="projects"
      className="w-[1423px] mx-auto"
    >
      <Intro
        title={"My Projects"}
        subtitle={"Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"}
        center={true}
      />
      {/* project category buttons */}
      <div className="mt-[59px] flex gap-[17px] items-center justify-center">
        {
          projectCategories.map(category => <Button
            active={false}
            key={category.text}
            label={category.text}
            btnType={'secondary'}
          />)
        }
      </div>

      {/* projects div */}
      <div className="mt-[106px] flex gap-[44px] tracking-[0.03em] justify-center items-center">
        {
          projects.map(project => <div
            className=""
            key={project.name}
          >
            <div className="bg-p2 rounded-[12px] w-[445px] h-[489px] pr-[28px] pl-[39px] relative overflow-hidden">
              <div className="absolute z-10 top-[84px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.16)]">
                <ProjectImageOne project={project} />
              </div>
              <div className="absolute right-[28px] bottom-0">
                {/* <img width={274} src={project.img} alt="" /> */}
                <ProjectImageTwo project={project} />
              </div>
            </div>
            <h3 className="text-p1 font-[400] text-[19px] leading-[28.5px] mt-[37px]">{project.category}</h3>
            <p className="font-[700] text-[24px] leading-[36px] mt-[10px]">{project.name}</p>
          </div>)
        }
      </div>
    </section>
  )
}

export default Projects