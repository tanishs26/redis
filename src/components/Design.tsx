import Image from "next/image";
import React from "react";
import { BiBrain, BiSolidNetworkChart } from "react-icons/bi";
import { BsDatabase, BsStars } from "react-icons/bs";
import { CiMountain1 } from "react-icons/ci";
import { FaCheck, FaPeopleLine } from "react-icons/fa6";
import { FiCpu } from "react-icons/fi";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { TbSettingsCode } from "react-icons/tb";
import Card from "./Card";
import { WiCloudRefresh } from "react-icons/wi";

const Design = () => {
  return (
    <section className="w-full mt-20">
      <div className="max-w-[85rem]  px-4 h-full mx-auto">
        <h1 className="text-white text-2xl font-semibold truncate flex justify-start">
          Think fast.{" "}
          <span className="text-[#dcff1e]">&nbsp; Build faster</span>
        </h1>
        <main
          className="mt-8 grid grid-cols-1
        lg:grid-cols-4 w-full gap-[2rem]
"
        >
          <button className=" md:scale-x-113 md:mx-10 overflow-hidden focus:border-[#dcff1e] md:pb-0 md:pr-0 bg-[#0d212c]  col-span-1 md:col-span-2 mx-auto  md:min-h-[360px] rounded-xl border-2 px-4 p-2 flex  border-white/5 hover:border-white/20  text-neutral-50 ">
            <div className="flex flex-col  h-full">
              <div className=" text-start">
                <h1 className="font-medium flex w-full justify-between md:justify-start items-center gap-2 text-lg">
                  Redis for AI <BsStars size={25} />
                </h1>
                <p className="md:mt-6 mt-2 text-sm ">
                  We’re the fast memory layer for chatbots and AI agents. Get
                  ready-to-use tools for building AI apps today.
                </p>
              </div>
              <div className="hidden mt-30 md:flex flex-col gap-1">
                <span className="text-sm text-neutral-400 flex gap-1">
                  <FaCheck />
                  Vector databases
                </span>
                <span className="text-sm text-neutral-400 flex gap-1">
                  <FaCheck />
                  AI Agent Memory
                </span>
                <span className="text-sm text-neutral-400 flex gap-1">
                  <FaCheck />
                  Semantic Search
                </span>
              </div>
            </div>
            <div className="hidden md:flex w-full overflow-hidden relative">
              <Image
                src="/1.png"
                fill
                className="hover:scale-110 cursor-pointer transition-all duration-700"
                draggable={false}
                alt="no-img"
              />
            </div>
          </button>

          <Card
            title="Redis LangCache"
            desc="Lower latency and LLM costs with fully managed semantic caching. "
            src="/2.png"
            icon={BiBrain}
          />
          <Card title="Caching" desc="Obviously " src="/3.png" icon={FiCpu} />
          <Card
            title="Redis Insight"
            desc="Develop,debug and visualize with our free graphical user interface and dev tools"
            src="/7.png"
            icon={BiSolidNetworkChart}
          />
          <Card
            title="Redis Flex"
            desc="Cache 5X more-at no extra cost."
            src="/6.png"
            icon={CiMountain1}
          />
          <Card
            title="Redis Query Engine"
            desc="Run powerful data queries & search in real time."
            icon={LiaNetworkWiredSolid}
            src="/5.png"
          />

          <Card
            title="Redis Data Integration"
            desc="Sync data from your existing database intensity."
            icon={TbSettingsCode}
            src="/4.png"
          />
        </main>
        <h1 className="mt-20 text-white text-2xl font-semibold truncate flex justify-start">
          Deploy <span className="text-[#dcff1e]">&nbsp;Anywhere</span>
        </h1>
        <div className="flex mt-10 gap-8 w-full mx-auto  flex-col  lg:flex-row justify-between items-center">

          <div className="flex flex-col  justify-between p-6 box-border border-1 rounded-xl border-neutral-200/20 sm:w-full lg:w-1/3  max-w-xl h-[200px] bg-[#0d212c]">
            <h1 className=" flex gap-2 items-center text-white text-lg text-shadow-lg">
              <WiCloudRefresh size={36} />
              In the cloud
            </h1>
            <p className="mt-2 text-sm text-neutral-300">
              Build on any cloud while we manage Redis for you
            </p>
            <button className=" rounded-md mt-4 w-full py-2 border-1 border-white/15 cursor-pointer hover:border-white/20 bg-[#163341] text-neutral-50 hover:bg-white/15">
              Learn more
            </button>
          </div>


          <div className="flex flex-col flex-wrap sm:w-full justify-between p-6 box-border border-1 rounded-xl border-neutral-200/20  lg:w-1/3 max-w-xl  h-[200px] bg-[#0d212c]">
            <h1 className=" flex gap-2 items-center text-white text-lg text-shadow-lg">
              <BsDatabase size={26} />
              On prem/hybrid cloud{" "}
            </h1>
            <p className="mt-2 text-sm flex flex-wrap text-neutral-300">
              Get the best Redis on the market and manage your own dependencies.
            </p>
            <button className=" rounded-md mt-4 w-full py-2 border-1 border-white/15 cursor-pointer hover:border-white/20 bg-[#163341] text-neutral-50 hover:bg-white/15">
              Learn more
            </button>
          </div>


          <div className="flex flex-col sm:w-full justify-between p-6 box-border border-1 rounded-xl border-neutral-200/20 lg:w-1/3 max-w-xl h-[200px] bg-[#0d212c]">
            <h1 className=" flex gap-2 items-center text-white text-lg text-shadow-lg">
              <FaPeopleLine size={27} />
              Redis Open Source
            </h1>
            <p className="mt-2 text-sm text-neutral-300">
              Download Redis 8 and build with free open source software.
            </p>
            <button className=" rounded-md mt-4 w-full py-2 border-1 border-white/15 cursor-pointer hover:border-white/20 bg-[#163341] text-neutral-50 hover:bg-white/15">
              Download Now
            </button>
          </div>
          {/* <Image src={"/stacks/1.avif"} fill alt="no-img"/> */}
        </div>
      </div>
    </section>
  );
};

export default Design;
