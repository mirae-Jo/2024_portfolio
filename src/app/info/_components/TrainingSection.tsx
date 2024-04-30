import React from "react";
import Header2 from "./Header2";

const TrainingSection = () => {
  return (
    <section>
      <Header2>training</Header2>
      <div className='mt-[5rem] flex flex-row justify-between text-[3.2rem] text-[#333]'>
        <div>내일배움캠프</div>
        <div>실무형 프론트엔드 엔지니어 양성과정</div>
        <div>2023.10 ~ 2024.02</div>
      </div>
    </section>
  );
};

export default TrainingSection;
