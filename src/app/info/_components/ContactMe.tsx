import Image from "next/image";
import React from "react";
import callIcon from "@/assets/call.svg";

const ContactMe = () => {
  return (
    <div className='fixed bottom-[12rem] right-[7rem] w-[10rem] h-[10rem] rounded-full border-solid border-2 border-main-blue bg-main-blue/[10%] text-[1.4rem] text-main-blue flex flex-col justify-center items-center backdrop-blur-[1rem] shadow-xl hover: cursor-pointer'>
      <Image src={callIcon} alt='전화기모양' className='w-[1.8rem] h-auto' />
      <p>contact</p>
      <p>me</p>
    </div>
  );
};

export default ContactMe;
