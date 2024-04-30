import Image from "next/image";
import React from "react";
import callIcon from "@/../../public/call.svg";

const ContactMe = () => {
  return (
    <div className='fixed bottom-[12rem] right-[7rem] w-[14rem] h-[14rem] rounded-full border-solid border-2 border-main-blue bg-main-blue/5 text-center text-[2.4rem] text-main-blue'>
      <div className=''>
        <Image src={callIcon} alt='전화기모양' />
        <p>contact</p>
        <p>me</p>
      </div>
    </div>
  );
};

export default ContactMe;
