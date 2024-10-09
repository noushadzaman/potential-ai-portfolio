import Button from "@/components/Button"
import Intro from "@/components/Intro"
import ProjectImageMobile from "@/components/ProjectImageMobile"
import ProjectImageOne from "@/components/ProjectImageOne"
import ProjectImageTwo from "@/components/ProjectImageTwo"
import { projectCategories, projects } from "@/constants"
import { useState } from "react"

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [projectsState, setProjectsState] = useState(projects.filter(p => p.category === "Web Design"));

  const setCategory = (category) => {
    setSelectedCategory(category)
    if (projectCategories[category].text === "All") {
      setProjectsState(projects);
    }
    else {
      setProjectsState(projects.filter(p => p.category === projectCategories[category].text));
    }
  }


  return (
    <section
      id="projects"
      className="max-w-[1423px] mx-auto"
    >
      <Intro
        title={"My Projects"}
        subtitle={"I’ve designed intuitive websites, engaging apps, and impactful graphics, enhancing user experiences and elevating brand identities."}
        center={true}
      />
      {/* project category buttons */}
      <div className="mt-[30px] lg:mt-[59px] flex flex-wrap gap-[17px] items-center justify-center">
        {
          projectCategories.map(category => <Button
            id={category.id}
            selectedCategory={selectedCategory}
            key={category.id}
            label={category.text}
            setCategory={setCategory}
            btnType={'secondary'}
          />)
        }
      </div>

      {/* projects div */}
      <div className="mt-[45px] lg:mt-[106px] flex flex-wrap gap-[44px] tracking-[0.03em] justify-center items-center">
        {
          projectsState.map(project => <div
            className="w-[360px] md:w-[445px]"
            key={project.name}
          >
            <div className="bg-p2 rounded-[12px] h-[489px] relative pr-[28px] pl-[39px] overflow-hidden">
              <div className="absolute z-10 top-[84px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.16)]">
                {/* for web view */}
                <ProjectImageOne project={project} />
                {/* for mobile view */}
                <ProjectImageMobile project={project} />
              </div>
              <div className="absolute right-[28px] bottom-0">
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