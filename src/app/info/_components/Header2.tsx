import React from "react";

const Header2 = ({ children }: { children: string }) => {
  return (
    <h2 className='text-[4.8rem] leading-[4.8rem] text-main-blue'>
      {children}
    </h2>
  );
};

export default Header2;
