import Align from "./_components/main/Align";
import BgCoverImage from "./_components/main/BgCoverImage";
import mainWaveGif from "@/../../public/wave.gif";
import { Purple_Purse } from "next/font/google";
import rightArrow from "@/../../public/right_arrow.svg";
import Image from "next/image";
import Link from "next/link";
import TipContainer from "./_components/main/Tip";

const purple = Purple_Purse({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className='w-screen h-screen relative'>
      <BgCoverImage src={mainWaveGif} alt={"main wave gif"} />
      <div className='bg-white/70 absolute top-0 left-0 w-full h-full animate-fade-in-slow opacity-0'>
        <div className='absolute bottom-[16rem] left-0 right-[6.5rem] flex flex-col gap-[5.7rem]'>
          <Align
            className={`${purple.className} text-[9.6rem] text-main-blue w-[82.2rem] h-[22.5rem] leading-[9.6rem] self-end`}>
            <Align.Left>
              <span>FRONT-END</span>
            </Align.Left>
            <Align.Right>
              <span>DEVELOPER</span>
              <TipContainer text='click me' className='mb-[0.5rem]'>
                <Link href={"/info"}>
                  <Image
                    className='animate-bounce-horizontal'
                    src={rightArrow}
                    alt={"인포 페이지로 이동하기"}
                  />
                </Link>
              </TipContainer>
            </Align.Right>
          </Align>
          <Align className='gap-[1.6rem] w-full pr-[9rem] text-[3.6rem] text-main-blue'>
            <Align.Right>
              <span>2024</span>
            </Align.Right>
            <hr className='border-main-blue' />
            <Align.Right>
              <span>MIRAE's Portfolio</span>
            </Align.Right>
          </Align>
        </div>
      </div>
    </div>
  );
}
