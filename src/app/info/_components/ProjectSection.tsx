import React from "react";
import Header2 from "./Header2";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section>
      <Header2>project</Header2>
      <div className='mt-[5rem] flex flex-col gap-[5rem]'>
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
