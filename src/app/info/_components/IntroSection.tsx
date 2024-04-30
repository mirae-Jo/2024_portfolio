import React from "react";
import Header2 from "./Header2";
import WhoAmICard from "./WhoAmICard";
import DeveloperCard from "./DeveloperCard";

const IntroSection = () => {
  return (
    <section>
      <Header2>introduction</Header2>
      <div className='mt-[5rem] flex flex-col gap-[5rem]'>
        <WhoAmICard />
        <DeveloperCard />
      </div>
    </section>
  );
};

export default IntroSection;
