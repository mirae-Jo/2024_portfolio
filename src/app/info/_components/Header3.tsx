import React from "react";

const Header3 = ({ children }: { children: string }) => {
  return (
    <h3 className='text-[3rem] text-[#333] leading-[3.2rem]'>{children}</h3>
  );
};

export default Header3;
