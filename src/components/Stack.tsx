"use client";
import React, { useState } from "react";
import Image from "next/image";
import { title } from "process";
import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaDiscord, FaGithubAlt } from "react-icons/fa6";
const Stack = () => {
  const langs = [
    {
      title: "AWS",
      path: "/stacks/1.avif",
    },
    {
      title: "Azure",
      path: "/stacks/2.avif",
    },
    {
      title: "Google Cloud",
      path: "/stacks/3.avif",
    },
    {
      title: "Vercel",
      path: "/stacks/4.avif",
    },
    {
      title: "Heroku",
      path: "/stacks/5.avif",
    },
    {
      title: "Node JS",
      path: "/stacks/6.avif",
    },
    {
      title: "Java",
      path: "/stacks/7.svg",
    },
    {
      title: "Javascript",
      path: "/stacks/8.svg",
    },
    {
      title: "GO",
      path: "/stacks/9.avif",
    },
    {
      title: "PHP",
      path: "/stacks/10.avif",
    },
    {
      title: ".NET",
      path: "/stacks/11.svg",
    },
    {
      title: "Python",
      path: "/stacks/12.avif",
    },
    {
      title: "Langchain",
      path: "/stacks/13.svg",
    },
    {
      title: "Kubernetes",
      path: "/stacks/14.svg",
    },
    {
      title: "Docker",
      path: "/stacks/15.svg",
    },
    {
      title: "C++",
      path: "/stacks/16.svg",
    },
  ];
  const features = [
    {
      title: "Active Geo Distribution",
      desc: "Get 99.999% uptime and local sub-millisecond latency.",
      src: "/lower/1.svg",
    },
    {
      title: "Automatic failover",
      desc: "Seamlessly switch to a replica with no downtime if your primary server fails.",
      src: "/lower/2.svg",
    },
    {
      title: "Multiple modern data structures",
      desc: "Work with 18 modern data structures, including vector sets, JSON, and more.",
      src: "/lower/3.svg",
    },
    {
      title: "Clustering",
      desc: "Automatically split your data across multiple nodes to improve uptime.",
      src: "/lower/4.svg",
    },
    {
      title: "Data integration (CDC)",
      desc: "Keep Redis updated with real-time changes from your system of record.",
      src: "/lower/5.svg",
    },
    {
      title: "Flexible deployment",
      desc: "Run Redis anywhere—cloud, on-prem, or hybrid. You’re in control.",
      src: "/lower/6.svg",
    },
  ];

  const [isTitle, setIsTitle] = useState("your tech stack");
  return (
    <div className="w-full mt-20 ">
      <section className="max-w-[85rem] mx-auto px-4 h-full ">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:gap-x-[250px] ">
          <div className="w-full lg:max-w-[250px]">
            <h1 className="text-white text-[28px] text-nowrap  shrink-2  font-semibold flex  lg:block transition-all duration-500">
              Works with &nbsp;
              <div className=" transition-opacity duration-500 text-[#dcff1e]">
                {isTitle}
              </div>
            </h1>
            <button className=" hidden md:block w-full text-center py-3 bg-white/5 hover:bg-white/10 transition-all duration-200 border-1 border-white/10 mt-6 hover:border-white/30 rounded-sm cursor-pointer text-sm text-white font-semibold">
              See all integration{" "}
            </button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mx-auto w-full items-center  mt-10 ">
            {langs.map((item) => {
              return (
                <div
                  key={item.title}
                  onMouseEnter={() => setIsTitle(item.title)}
                  onMouseLeave={() => setIsTitle("your tech stack")}
                  className="w-16 md:w-18 lg:w-22 aspect-square hover:bg-neutral-200/9 rounded-lg hover:border-1 hover:border-[#163341] cursor-pointer relative"
                >
                  <Image
                    draggable={false}
                    key={item.title}
                    fill
                    src={`${item.path}`}
                    alt="not available"
                  />
                </div>
              );
            })}
          </div>
          <button className=" md:hidden block w-full text-center py-3 bg-white/5 hover:bg-white/10 transition-all duration-200 border-1 border-white/10 mt-6 hover:border-white/30 rounded-sm cursor-pointer text-sm text-white font-semibold">
            See all integration{" "}
          </button>
        </div>
        {/* Lower Half */}
        <div className="w-full   flex flex-col lg:flex-row lg:justify-between mt-20  lg:gap-x-[200px]">
          <div className="w-full lg:w-1/4 mb-10">
            <div className="text-white text-3xl font-semibold  text-wrap   transition-all duration-500">
              The features you need
              <span className=" text-[#dcff1e]">&nbsp;all in one place</span>
            </div>

            <p className="text-neutral-300 text-md">
              Build the way you want. We manage scaling so everything just
              works.
            </p>
            <button className="w-full text-center py-3 bg-white/5 hover:bg-white/10 transition-all duration-200 border-1 border-white/10 mt-6 hover:border-white/30 rounded-sm cursor-pointer text-sm text-white font-semibold">
              Explore docs{" "}
            </button>
          </div>

          <div className="flex w-full flex-1 mx-auto flex-wrap gap-x-16 gap-y-12">
            {features.map((item) => {
              return (
                <Card
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  src={item.src}
                />
              );
            })}
          </div>
        </div>
        <div className=" mt-30  w-full text-center justify-center flex flex-col ">
          <h1 className="text-3xl tracking-tight text-neutral-50 font-extrabold">
            Join the <span className="text-[#ff4428]">Redis</span> Community
          </h1>
          <p className="text-neutral-50 mt-6">By developers, for developers</p>
          <div className="flex  w-full justify-center gap-4">
            <button
              className="  w-full lg:w-[20%]  text-center py-2 bg-[#3a2327] hover:bg-[#ff4428]/80 transition-all duration-200 border-1 border-[#ff4428] mt-6 hover:border-white/30 rounded-sm cursor-pointer text-sm text-white font-semibold
            flex
            justify-center
            items-center gap-2"
            >
              <FaGithubAlt size={20} className="text-neutral-50" />
              <span className="font-semibold text-shadow-lg">Github</span>
            </button>
            <button className="  w-full lg:w-[20%]  text-center py-2 bg-[#3a2327] hover:bg-[#ff4428]/80 transition-all duration-200 border-1 border-[#ff4428] mt-6 hover:border-white/30 rounded-sm cursor-pointer text-sm text-white font-semibold
              flex
            justify-center
            items-center gap-2">
              <FaDiscord size={20} className="text-neutral-50" />
              <span className="font-semibold text-shadow-lg">Discord</span>{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stack;

const Card = ({
  title,
  src,
  desc,
}: {
  title: string;
  src: string;
  desc: string;
}) => {
  return (
    <div className="w-full lg:min-w-[250px]  h-fit  lg:max-w-[350px]">
      <div className="w-full flex gap-3 items-center mb-5 ]">
        <Image src={`${src}`} width={32} height={25} alt="no-img" />
        <h1 className="text-md font-semibold text-neutral-100 text-wrap">
          {title}{" "}
        </h1>
      </div>
      <p className="w-full text-neutral-300 text-md text-wrap">{desc}</p>
    </div>
  );
};
