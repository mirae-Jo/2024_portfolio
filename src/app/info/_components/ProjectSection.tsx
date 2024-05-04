import React from "react";
import Header2 from "./Header2";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section>
      <Header2>project</Header2>
      <div className='mt-[7rem] flex flex-col gap-[5rem]'>
        <ProjectCard />
        <div className='relative'>
          <ProjectCard />
          <div className='absolute -bottom-5 -top-5 -left-full -right-full backdrop-blur-[1.5rem] bg-white/[70%]'></div>
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3rem] w-full text-center'>
            New projects coming soon
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
