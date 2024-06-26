import React from "react";
import Header2 from "./Header2";

const SkillsSection = () => {
  return (
    <section>
      <Header2>skills</Header2>
      <div className='mt-[7rem] grid grid-cols-4 gap-[3rem] text-[3rem] text-center text-[#333]'>
        <div>HTML</div>
        <div>CSS</div>
        <div>JAVASCRIPT</div>
        <div>TYPESCRIPT</div>
        <div>REACT</div>
        <div>NEXT.JS</div>
        <div>REDUX</div>
      </div>
    </section>
  );
};

export default SkillsSection;
