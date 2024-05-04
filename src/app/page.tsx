import Flex from "./_components/main/Align";
import BgCoverImage from "./_components/main/BgCoverImage";
import mainWaveGif from "@/assets/wave.gif";
import rightArrow from "@/assets/right_arrow.svg";
import Image from "next/image";
import Link from "next/link";
import TipContainer from "./_components/main/Tip";
import { purple } from "@/fonts/purple";
import { sans } from "@/fonts/sans";

export default function Home() {
  return (
    <div className='w-screen h-screen relative'>
      <BgCoverImage src={mainWaveGif} alt={"main wave gif"} />
      <div className='bg-white/70 absolute top-0 left-0 w-full h-full animate-fade-in-slow opacity-0'>
        <div className='absolute bottom-[7rem] left-0 right-[6.5rem] flex flex-col gap-[5.7rem]'>
          <Flex
            className={`${purple.className} text-[9.6rem] text-main-blue w-[82.2rem] h-[22.5rem] leading-[9.6rem] self-end`}>
            <Flex.Start>
              <span>FRONT-END</span>
            </Flex.Start>
            <Flex.End>
              <span>DEVELOPER</span>
              <TipContainer
                text='click me'
                className={`mb-[0.5rem] ${sans.className}`}>
                <Link href={"/info"}>
                  <Image
                    className='animate-bounce-horizontal'
                    src={rightArrow}
                    alt={"인포 페이지로 이동하기"}
                  />
                </Link>
              </TipContainer>
            </Flex.End>
          </Flex>
          <Flex className='gap-[1.6rem] w-full pr-[9rem] text-[3.6rem] text-main-blue'>
            <Flex.End>
              <span>2024</span>
            </Flex.End>
            <hr className='border-main-blue' />
            <Flex.End>
              <span>{`MIRAE's Portfolio`}</span>
            </Flex.End>
          </Flex>
        </div>
      </div>
    </div>
  );
}
