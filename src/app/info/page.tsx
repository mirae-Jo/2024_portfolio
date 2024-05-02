import React from "react";
import IntroSection from "./_components/IntroSection";
import SkillsSection from "./_components/SkillsSection";
import TrainingSection from "./_components/TrainingSection";
import Navigation from "../_components/ui/Navigation";
import ProjectSection from "./_components/ProjectSection";

import ModalContainer, {
  Content,
  Toggle,
} from "../_components/ui/ModalContainer";
import ContactMe from "./_components/ContactMe";
import ContactMeModal from "./_components/ContactMeModal";

const InfoPage = async () => {
  return (
    <div>
      <Navigation path={"/info"} />
      <div className='w-[100rem] h-auto my-0 mx-auto pt-[12rem] flex flex-col gap-[13rem]'>
        <IntroSection />
        <SkillsSection />
        <TrainingSection />
        <ProjectSection />
      </div>
      <ModalContainer>
        <Toggle>
          <ContactMe />
        </Toggle>
        <Content>
          <ContactMeModal />
        </Content>
      </ModalContainer>
      <footer className='mt-[13rem] w-screen h-[7rem] bg-white text-center leading-[7rem] text-[2rem] text-[#333]'>
        © 2024. 조미래 all rights reserved.
      </footer>
    </div>
  );
};

export default InfoPage;
