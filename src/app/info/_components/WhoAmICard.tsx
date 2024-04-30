import React from "react";
import Header3 from "./Header3";
import Image from "next/image";

const WhoAmICard = () => {
  return (
    <div>
      <Header3>나는 누구인가요?</Header3>
      <div className='mt-[3rem] flex flex-row gap-[5rem]'>
        <div className='w-[15rem] h-[19rem] bg-[#555]'>
          <Image src={""} alt={""} />
        </div>
        <div className='text-[2.4rem] text-[#333] h-[19rem] flex flex-col justify-between'>
          <p>조미래</p>
          <p>1998년생</p>
          <p>Github</p>
          <p>blog</p>
        </div>
      </div>
    </div>
  );
};

export default WhoAmICard;
