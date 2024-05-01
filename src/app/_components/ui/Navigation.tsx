import React, { useState } from "react";
import Link from "next/link";
import Flex from "../main/Align";

type Props = {
  path: string;
};

const Navigation = ({ path }: Props) => {
  const isInfo = path.includes("info");

  const textGray = "text-[#333]";
  const getTextGray = (condition: boolean) => (condition ? textGray : "");

  return (
    <nav className='w-screen h-[7rem] bg-white fixed top-0 px-[4rem] drop-shadow-md'>
      <Flex direction='row' className='h-full items-center '>
        <Flex.Start>
          <h1 className='text-[3.6rem] text-[#333]'>
            <Link href='/'>MIRAE</Link>
          </h1>
        </Flex.Start>
        <Flex.End>
          <ul className='flex flex-row text-[2.8rem] gap-[5rem] text-[#aaa] font-light'>
            <li>
              <Link href='/' className={getTextGray(!isInfo)}>
                Home
              </Link>
            </li>
            <li>
              <Link href='/info' className={getTextGray(isInfo)}>
                Info
              </Link>
            </li>
          </ul>
        </Flex.End>
      </Flex>
    </nav>
  );
};

export default Navigation;
