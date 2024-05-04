import React from "react";
import Header3 from "./Header3";
import Image from "next/image";
import myProfileImg from "@/assets/조미래.jpg";
import Link from "next/link";

const WhoAmICard = () => {
  return (
    <div>
      <Header3>나는 누구인가요?</Header3>
      <div className='mt-[3rem] flex flex-row gap-[5rem]'>
        <div className='w-[15rem] h-[19rem] bg-[#555]'>
          <Image
            src={myProfileImg}
            alt={"프로필이미지"}
            priority
            className=' object-contain'
          />
        </div>
        <div className='text-[2rem] text-[#333] h-[19rem] flex flex-col justify-between'>
          <p>조미래</p>
          <p>1998년생</p>
          <p>
            <Link href={"https://github.com/mirae-Jo"}>Github</Link>
          </p>
          <p>
            <Link href={"https://mirae9873.tistory.com/"}>blog</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAmICard;
