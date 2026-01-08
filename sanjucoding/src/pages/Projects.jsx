
import Title from "../components/Title";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {

    

  return (
    <div className="lg:h-auto lg:w-full h-auto w-full lg:pb-15 pb-20  lg:px-20 lg:py-10 bg-gradient-to-b from-black via-purple-950 to-violet-900">
      <Title title={"Projects"} />
      <div  className="h-fit w-full mt-10   flex flex-wrap gap-10 justify-evenly">
        <ProjectCard
          
          title={"Railway Reservation System"}
          url={"/images/Screenshot 2026-01-04 at 2.05.39 AM.png"}
          siteUrl={"https://railmatrix-6487f.web.app"}
        />
        <ProjectCard
          
          title={"ChicBurg Website"}
          url={"/images/Screenshot 2025-10-05 at 10.03.08 PM.png"}
          siteUrl={"https://sanjeevkupan18.github.io/ChicBurg-Website/"}
        />
        <ProjectCard
          
          title={"Blog Website"}
          url={"/images/Screenshot 2025-10-05 at 10.14.37 PM.png"}
          siteUrl={"https://github.com/sanjeevkupan18/Blog-Website-Backend"}
        />
        <ProjectCard
          
          title={"Animated Website"}
          url={"/images/Screenshot 2026-01-04 at 2.53.48 AM.png"}
          siteUrl={"https://sanjeevkupan18.github.io/Animated-Website/"}
        />
        <ProjectCard
          
          title={"Weather Website"}
          url={"/images/Screenshot 2026-01-04 at 2.47.46 AM.png"}
          siteUrl={"https://sanjeevkupan18.github.io/Weather-App/"}
        />
        <ProjectCard
          
          title={"Parallax Website"}
          url={"/images/Screenshot 2026-01-04 at 2.37.24 AM.png"}
          siteUrl={"https://sanjeevkupan18.github.io/Parallax-Website/"}
        />
      </div>
    </div>
  );
};

export default Projects;
