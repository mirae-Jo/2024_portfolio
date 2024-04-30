import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = () => {
  return (
    <div className='flex flex-row gap-[5rem]'>
      <div className='w-[30rem] h-[34rem] bg-[#eee]'>
        <Image src={""} alt={""} />
      </div>
      <div className='w-[65rem] h-[34rem] text-[3.2rem] text-[#333] flex flex-col justify-between'>
        <h4>캠퍼스팟</h4>
        <Link href={"https://github.com/h0ngwon/Camperspot"}>Github</Link>
        <p className='text-[2.4rem]'>
          프로젝트 캠퍼스팟은 5명의 프론트엔드 개발자와 1명의 디자이너로
          이루어진 팀이 캠핑장 이용자들을 대상으로 손쉽게 캠핑장 예약을 할 수
          있도록 기획하여 제작한 웹사이트입니다. 저의 첫 번째 포트폴리오
          프로젝트이며, 업체회원을 위한 페이지를 담당하였습니다.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
