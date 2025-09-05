import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="w-full inset-0 mt-25">
      <div className=" max-w-[85rem] overflow-x-hidden mx-auto items-center justify-center flex flex-col">
        <h1
          className="flex  
          tracking-normal
          font-title
        text-6xl md:text-7xl 2xl:text-[110px] max-w-2xl flex-shrink
        font-extrabold
         text-center 
      flex-wrap px-4 
      text-shadow-md text-shadow-black
       text-white/90"
        >
          YOUR APP IS ABOUT TO GET FASTER &nbsp;
        </h1>
        <p className="text-sm text-neutral-300 text-shadow-sm mt-5 ">
          Build AI apps with more speed, memory, and accuracy.
        </p>
        <div className="w-full max-w-xl flex gap-4 mt-10 px-5">
          <button className="w-full text-center py-3 bg-[#ff4428]/25  transition-all duration-200 border-1 border-[#ff4428] hover:bg-[#ff4428]/80 text-white rounded-sm cursor-pointer text-sm truncate font-semibold">
            Try Redis for free
          </button>
          <button className="w-full text-center py-3 bg-white/5 hover:bg-white/20 transition-all duration-200 border-1 rounded-sm cursor-pointer text-sm text-white font-semibold">
            Get a demo
          </button>
        </div>
        <div className="mt-15 px-4 max-w-[300px]  z-1 opacity-70 md:max-w-3xl ">
          <Marquee className="w-full flex z-1 mask-r-from-50%
          mask-l-from-50%">
            <Image
              className="mr-8 "
              src="./adobe.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./british.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./capital.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./dicks.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./fiver.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./ibm.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./intel.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./jetblue.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./mercedes.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./niantic.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./sirius.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./uber.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./unity.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./waze.svg"
              width={120}
              height={100}
              alt="no-img"
            />
            <Image
              className="mr-8 "
              src="./zap.svg"
              width={120}
              height={100}
              alt="no-img"
            />
          </Marquee>
        </div>
        <p className="text-neutral-400 mt-7">
          Trusted by fast companies across the globe
        </p>
      </div>
    </div>
  );
};

export default Hero;
