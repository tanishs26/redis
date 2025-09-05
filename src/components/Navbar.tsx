"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { BsDatabase, BsStars } from "react-icons/bs";
import { FaMinus, FaPeopleLine } from "react-icons/fa6";
import {  FiSearch } from "react-icons/fi";
import {  IoMenu } from "react-icons/io5";
import { PiPlusBold } from "react-icons/pi";
import { RxCaretDown } from "react-icons/rx";
import { WiCloudRefresh } from "react-icons/wi";
import NavHoverCard from "./NavHoverCard";
import { SiRedis } from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log(isMenuOpen);
  };
  return (
    <nav className="z-50 w-full inset-0 font-main border-b-1  text-white lg:sticky bg-redis border-[#163341]">
      <div className=" max-w-[85rem] mx-auto h-18 p-2 px-4 flex justify-between items-center  ">
        <div className=" flex items-center gap-6">
          <div className="flex items-center m-0 p-0 w-22 h-15">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 85 27"
            >
              <path
                fill="#FF4438"
                fillRule="evenodd"
                d="M75.29 13.813c0-2.968 2.2-4.69 4.947-4.69 2.052 0 3.884.99 4.763 3.444-.257 1.245-1.795 2.638-2.455 2.858-.55-1.173-1.172-1.869-1.758-1.869-.733 0-.77.513-.77 1.172 0 .467.134 1.155.295 1.983.243 1.25.548 2.82.548 4.43 0 2.93-2.052 5.092-5.203 5.092-2.885 0-4.48-1.892-5.19-4.913-1.885 3.377-4.641 4.913-6.754 4.913-3.302 0-4.08-2.441-4-4.917-1.328 2.345-3.882 4.917-6.331 4.917-2.501 0-3.384-2.177-3.182-4.712-1.498 2.791-4.208 4.712-6.82 4.712-2.836 0-4.239-2.252-3.785-5.044-1.907 2.344-5.458 5.044-9.149 5.044-4.209 0-6.04-2.27-6.258-5.114-2.031 3.256-4.77 5.224-8.03 5.224-4.709 0-6.393-4.187-6.638-7.611a111 111 0 0 1-6.113 7.464c-.256.257-.476.403-.732.403C1.832 26.6.11 22.862 0 21.47c.723-1.121 5.281-6.13 8.95-10.161 1.29-1.417 2.471-2.714 3.336-3.679-2.247.678-4.564 2.03-7.486 4.132-.513.366-1.942-2.968-1.906-5.533 3.371-2.49 8.5-4.066 12.64-4.066 5.79 0 9.123 3.224 9.123 7.694 0 3.737-3.114 7.84-7.657 7.987-2.362.061-3.876-1.265-4.65-2.902.092 2.532 1.409 5.65 4.943 5.65 3.853 0 5.704-2.326 8.463-5.795q.269-.339.55-.69c2.345-2.895 5.056-5.46 9.013-5.46 2.418 0 4.067 1.503 4.067 3.774 0 2.748-3.224 6.558-7.73 6.558-.77 0-1.472-.101-2.064-.301q-.024.173-.025.338c0 1.282.476 2.052 2.565 2.052 3.077 0 5.971-1.832 9.489-6.119 3.444-4.213 6.045-6.045 8.793-6.045 1.855 0 3.262 1.005 3.883 2.698C57.98 6.283 61.104 2.514 63.75 0c2.601 1.1 4.47 3.26 3.957 3.7-1.942 1.76-8.427 8.83-10.991 13.044-.66 1.099-1.283 2.308-1.283 2.894 0 .55.33.733.696.733 1.76 0 5.289-4.156 8.336-7.746 1.138-1.34 2.209-2.602 3.095-3.539 2.052.843 4.14 2.638 3.627 3.261-2.71 3.224-4.762 5.862-4.762 7.364 0 .403.146.66.696.66 1.026 0 1.978-.916 3.554-2.858.33-.403.732-.403.989.22.696 1.685 1.722 2.601 2.528 2.601.952 0 1.429-.843 1.429-2.125 0-.876-.107-1.895-.2-2.772-.069-.664-.13-1.246-.13-1.624m-59.096-.477c1.942 0 4.067-1.062 4.067-3.224 0-1.312-.814-2.521-2.99-2.89l-.342.535c-1.106 1.729-2.149 3.359-3.2 4.953.63.354 1.427.626 2.465.626m19.638.66c0-.587-.367-.99-.953-.99-1.47 0-3.687 2.063-4.73 4.055.385.15.837.232 1.323.232 2.601 0 4.36-1.978 4.36-3.297m9.636 5.312c0 .66.366 1.1 1.135 1.1 2.382 0 5.35-4.324 5.35-6.083 0-.732-.403-1.172-1.063-1.172-2.162 0-5.422 4.103-5.422 6.155M76.06 6.082c-.843 1.392-2.125 2.968-2.601 3.444-2.199-.916-4.25-2.748-3.957-3.26.806-1.43 2.125-2.968 2.601-3.445 2.198.916 4.25 2.785 3.957 3.261"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

          <div className=" hidden lg:flex animate-rotate-border w-[120px] h-[40px]  bg-conic/[from_var(--border-angle)] from-transparent via-[#ff4428] to-10% p-px  rounded-full">
            <button className="flex truncate w-full h-full text-center items-center p-2  text-white text-sm  bg-[#351d22] hover:bg-[#ff4427] rounded-full  cursor-pointer active:scale-95 duration-500">
              <BsStars />
              Redis for AI
            </button>
          </div>

          <div className=" hidden lg:flex font-medium text-sm items-center justify-center gap-5 ">
            <div className=" group relative font-main  transition duration-300 flex gap-2 items-center h-20 hover:text-[#ff4438] cursor-pointer">
              Products{" "}
              <RxCaretDown
                className="text-[#ff4438] group-hover:rotate-180 transition-all duration-300"
                size={22}
              />
              <div className="border-1 border-[#163341] hidden overflow-hidden group-hover:flex absolute z-20 min-w-4xl bg-redis -left-20 top-17 rounded-2xl  flex-col max-w-5xl">
                <div className="flex">
                  <div className="p-6 w-full">
                    <h1 className="text-neutral-400 text-md">PRODUCTS</h1>
                    <hr className="text-neutral-400 mt-2 w-full mx-auto" />
                    <NavHoverCard
                      title="Redis Cloud"
                      desc="Fully managed and integrated with Google Cloud, Azure and AWS."
                      icon={WiCloudRefresh}
                      size={29}
                    />
                    <NavHoverCard
                      title="Redis Software"
                      desc="Self-managed software with enterprise grade compliance and reliability."
                      icon={BsDatabase}
                      size={20}
                    />
                    <NavHoverCard
                      title="Redis Open Source"
                      desc="In memory database for caching and streaming."
                      icon={FaPeopleLine}
                      size={22}
                    />
                    <NavHoverCard
                      title="Redis for AI"
                      desc="Faster GenAI apps starts here."
                      icon={BsStars}
                      size={22}
                    />
                  </div>
                  <div className="w-1/3 bg-[#0d212c]">
                    {/* //button content */}
                    <div className="p-6 w-full">
                      <h1 className="text-neutral-400 text-md">TOOLS</h1>
                      <hr className="text-neutral-400 mt-2 w-full mx-auto" />
                      <div className=" transition flex flex-col mt-2">
                        <span className="hover:text-[#ff4428] font-semibold text-md text-amber-50 mt-4">
                          Redis Langcache
                        </span>
                        <span className="hover:text-[#ff4428] font-semibold text-md text-amber-50 mt-4">
                          Redis Insight
                        </span>
                        <span className="hover:text-[#ff4428] font-semibold text-md text-amber-50 mt-4">
                          Redis Integration
                        </span>
                        <span className="hover:text-[#ff4428] font-semibold text-md text-amber-50 mt-4 truncate">
                          Clients & Connectors
                        </span>
                      </div>
                      <div className="mt-10">
                        <h1 className="text-neutral-400 text-md">GET REDIS</h1>
                        <button className="w-full bg-[#163341] border-1 border-white/8 text-neutral-50 mt-3 py-2 rounded-md hover:border-white/30 cursor-pointer">
                          Downloads
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="h-21 w-full flex items-center   
                px-6
                rounded-b-2xl bg-[#163341] justify-between"
                >
                  <h1 className="font-title text-5xl  font-bold  text-neutral-50 flex">
                    {" "}
                    Redis{" "}
                    <span className="flex items-center justify-center text-white rounded-full w-[50px] h-[50px] scale-80 mx-1 bg-[#ff4428]">
                      <SiRedis size={26} />
                    </span>{" "}
                    Released
                  </h1>
                  <p className="text-white/90 text-lg text-shadow-lg mx-4">
                    A world wide in-person event series
                  </p>
                  <button
                    className="w-fit bg-[#351d22] border-1 border-[#ff4428]/50 text-neutral-50 hover:bg-[#ff4428]/80 
                   text-sm py-2 px-4 rounded-md hover:border-[#ff4428]/90 cursor-pointer"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
            <div className=" font-main group transition-all duration-500 flex gap-2 items-center hover:text-[#ff4438] cursor-pointer relative h-20">
              Resources{" "}
              <RxCaretDown
                className="text-[#ff4438]
              relative
              group-hover:rotate-180 transition-all duration-300"
                size={22}
              />
              <div className="border-1 border-[#163341] hidden overflow-hidden group-hover:flex absolute z-20 min-w-4xl bg-redis -left-30 top-17 rounded-2xl min-h-fit flex-col max-w-5xl">
                <div className="flex">
                  <div className="p-6 w-full">
                    <h1 className="text-neutral-400 text-md">LEARN</h1>
                    <hr className="text-neutral-500 mt-2 w-full mx-auto" />
                    <div className="grid grid-cols-3 gap-y-5 mt-6 text-white">
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Tutorial
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        QuickStart
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Commands
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        University
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Knowledge Base
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Resources
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Blog
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Demo center
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Developer Hub
                      </p>
                    </div>
                    <h1 className="text-neutral-400 text-md mt-8">CONNECT</h1>
                    <hr className="text-neutral-500 mt-2 w-full mx-auto" />
                    <div className="grid grid-cols-3 gap-y-5 mt-6 text-white">
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Custom stories
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Partners
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Support
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Community
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Events & Webinars
                      </p>
                      <p className="text-sm text-neutral-100 font-semibold hover:text-[#ff4428]">
                        Professional Services
                      </p>
                    </div>
                  </div>
                  <div className="w-1/3 bg-[#0d212c]">
                    {/* //button content */}
                    <div className="p-6 w-full">
                      <h1 className="text-neutral-400 text-md">LATEST</h1>
                      <hr className="text-neutral-400 mt-2 w-full mx-auto" />
                      <div className=" transition flex flex-col mt-2">
                        <span className="hover:text-[#ff4428] font-semibold text-md text-amber-50 mt-4">
                          Releases
                        </span>
                        <span className="hover:text-[#ff4428] font-semibold text-md text-amber-50 mt-4">
                          News & Updates{" "}
                        </span>
                      </div>
                      <div className="mt-40">
                        <h1 className="text-neutral-400 text-md">LEARN HOW TO BUILD</h1>
                        <button className="w-full bg-[#163341] border-1 border-white/8 text-neutral-50 mt-3 py-2 rounded-md hover:border-white/30 cursor-pointer">
Visit Our Developer Hub                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Event info resourcess */}
                <div
                  className="h-21 w-full flex items-center   
                px-6
                rounded-b-2xl bg-[#163341] justify-between"
                >
                  <h1 className="font-title text-5xl  font-bold  text-neutral-50 flex">
                    {" "}
                    Redis{" "}
                    <span className="flex items-center justify-center text-white rounded-full w-[50px] h-[50px] scale-80 mx-1 bg-[#ff4428]">
                      <SiRedis size={26} />
                    </span>{" "}
                    Released
                  </h1>
                  <p className="text-white/90 text-lg tracking-wide text-shadow-lg mx-4">
                    A world wide in-person event series
                  </p>
                  <button
                    className="w-fit bg-[#351d22] border-1 border-[#ff4428]/50 text-neutral-50 hover:bg-[#ff4428]/80 
                   text-sm py-2 px-6 truncate mx-0 rounded-md hover:border-[#ff4428]/90 cursor-pointer"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
            <div className="  transition duration-300 hover:text-[#ff4438] cursor-pointer">
              Pricing
            </div>
            <div className="  transition duration-300 hover:text-[#ff4438] cursor-pointer">
              Docs
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 ">
          <div className="relative flex items-center justify-between">
            <div className=" absolute bottom-2 left-2 mr-2">
              <FiSearch size={19} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="py-2 rounded-full justify-between flex placeholder-amber-50  text-sm pl-8 px-2 w-[140px] bg-white/20 outline-0 "
            />
          </div>
          <div className=" transition duration-300 hover:text-[#ff4438] cursor-pointer font-medium text-sm">
            Login
          </div>
          <div className=" transition duration-300 hover:text-[#ff4438] cursor-pointer font-medium text-sm">
            Book a Meeting
          </div>
          <button className="  transition duration-300  bg-[#ff4438]/20 px-7 py-2 border-2 border-[#ff4438]/60 rounded-md cursor-pointer hover:bg-[#ff4438]/60">
            <span className="text-shadow-md"> Try Redis</span>
          </button>
        </div>
        <div className="flex lg:hidden items-center gap-6">
          <FiSearch size={23} className="cursor-pointer" />
          <button onClick={handleMenu} className="cursor-pointer">
            <IoMenu size={26} />
          </button>
        </div>
        {isMenuOpen && (
          <section className="z-40 border-b-1 border-neutral-500 lg:hidden absolute transition-all duration-500 bottom-auto   top-18 left-0 right-0 bg-[#0d212c] ">
            <div className="font-semibold text-lg max-w-[95%] mx-auto  px-1 h-20 flex  border-b-1 border-[#fefefe]/10 gap-3 items-center">
              Redis for AI
              <BsStars className="text-[#ff4428]" />
            </div>
            {/* Products  */}
            <div className="font-semibold text-lg max-w-[95%] mx-auto px-1  py-2 min-h-20 flex justify-center   flex-col border-[#fefefe]/10">
              <div className="flex justify-between items-center">
                Products{" "}
                {isProductOpen ? (
                  <FaMinus
                    className="text-[#ff4428] cursor-pointer transform  transition"
                    onClick={() => setIsProductOpen((prev) => !prev)}
                  />
                ) : (
                  <PiPlusBold
                    className="text-[#ff4428] cursor-pointer"
                    onClick={() => setIsProductOpen((prev) => !prev)}
                  />
                )}
              </div>
            </div>
            <AnimatePresence initial={false}>
              {isProductOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                  className="mx-auto max-w-[95%] px-1 mt-4"
                >
                  <h1 className="text-sm  text-neutral-400 ">PRODUCTS</h1>
                  <br />
                  <div className="mb-6 flex flex-col gap-1">
                    <h2 className="text-sm text-neutral-450">Redis Cloud</h2>
                    <p className="text-sm text-neutral-400">
                      Fully managed and integrated with Google Cloud,Azure, and
                      AWS
                    </p>
                  </div>
                  <div className="mb-6 flex flex-col gap-1">
                    <h2 className="text-sm text-neutral-450">Redis for AI</h2>
                    <p className="text-sm text-neutral-400">
                      Faster GenAI apps starts here
                    </p>
                  </div>
                  <div className="mb-6 flex flex-col gap-1">
                    <h2 className="text-sm text-neutral-450">Redis Software</h2>
                    <p className="text-sm text-neutral-400">
                      Self-managed software with enterprise-grade compliance and
                      reliability{" "}
                    </p>
                  </div>
                  <div className="mb-6 flex flex-col gap-1">
                    <h2 className="text-sm text-neutral-450">
                      Redis Open Source
                    </h2>
                    <p className="text-sm text-neutral-400">
                      In-memory database for caching & streaming{" "}
                    </p>
                  </div>
                  <br />
                  <h1 className="text-sm text-neutral-400 mb-4">TOOLS</h1>
                  <div className="text-sm text-neutral-300 pb-4">
                    Radios LangCache
                  </div>
                  <div className="text-sm text-neutral-300 pb-4">
                    Redis Insight
                  </div>

                  <div className="text-sm text-neutral-300 pb-4">
                    Redis Data Inegration
                  </div>

                  <div className="text-sm text-neutral-300 pb-4">
                    Clients and Connectors{" "}
                  </div>
                  <br />
                  <h1 className="text-neutral-400 text-sm">GET REDIS</h1>
                  <br />
                  <button className="w-full text-center py-4 bg-white/5 hover:bg-white/10 transition-all duration-200 border-1 rounded-sm cursor-pointer">
                    Downloads
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <hr className="w-[95%] mx-auto text-[#fefefe]/10" />
            {/* Resources */}
            <div className="font-semibold text-lg max-w-[95%] px-1 mx-auto  py-2 h-20 flex items-center  justify-between">
              Resources
              {isResourcesOpen ? (
                <FaMinus
                  className="text-[#ff4428] cursor-pointer transform  transition"
                  onClick={() => setIsResourcesOpen((prev) => !prev)}
                />
              ) : (
                <PiPlusBold
                  className="text-[#ff4428] cursor-pointer"
                  onClick={() => setIsResourcesOpen((prev) => !prev)}
                />
              )}
            </div>
            <AnimatePresence>
              {isResourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden mx-auto max-w-[95%] px-1"
                >
                  <h1 className="text-neutral-400 text-sm">LEARN</h1>
                  <br />
                  <p className="text-sm text-neutral-300 pb-4">Tutorials</p>
                  <p className="text-sm text-neutral-300 pb-4">Quick starts</p>
                  <p className="text-sm text-neutral-300 pb-4">Commands</p>
                  <p className="text-sm text-neutral-300 pb-4">University</p>
                  <p className="text-sm text-neutral-300 pb-4">
                    Knowledge Base
                  </p>
                  <p className="text-sm text-neutral-300 pb-4">Resources</p>
                  <p className="text-sm text-neutral-300 pb-4">Blog</p>
                  <p className="text-sm text-neutral-300 pb-4">Demo Center</p>
                  <p className="text-sm text-neutral-300 pb-4">Developer Hub</p>
                  <br />
                  <h1 className="text-neutral-400 text-sm">CONNECT</h1>
                  <br />
                  <p className="text-sm text-neutral-300 pb-4">Releases</p>
                  <p className="text-sm text-neutral-300 pb-4">
                    News & Updates
                  </p>
                  <br />
                  <h1 className="text-neutral-400 text-sm">
                    LEARN HOW TO BUILD
                  </h1>
                  <br />
                  <button className="w-full text-center py-3 bg-white/5 hover:bg-white/10 transition-all duration-200 border-1 rounded-sm cursor-pointer text-sm font-semibold">
                    Visit our Developers Hub
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <hr className="w-[95%] mx-auto text-[#fefefe]/10" />
            <div className="font-semibold text-lg max-w-[95%] px-1 mx-auto  py-2 h-20 flex items-center border-b-1 border-[#fefefe]/10">
              Docs{" "}
            </div>
            <div className="font-semibold text-lg max-w-[95%] px-1 mx-auto  py-2 h-20 flex items-center  border-[#fefefe]/10">
              Pricing{" "}
            </div>
            <div className="flex flex-col max-w-[95%] mx-auto mt-2 gap-6">
              <button
                className="text-sm w-full text-center py-3
               bg-[#ff4438]/25 hover:bg-[#ff4428]/70 transition-all duration-200 border-1 rounded-sm cursor-pointer font-semibold border-[#ff4428]"
              >
                Try Redis{" "}
              </button>
              <button className="text-sm w-full text-center py-3 bg-white/5 hover:bg-white/10 transition-all duration-200 border-1 rounded-sm cursor-pointer font-semibold">
                Book a meeting{" "}
              </button>
              <button className="text-sm w-full text-center py-3 bg-white/5 hover:bg-white/10 transition-all duration-200 border-1 rounded-sm cursor-pointer mb-20 font-semibold">
                Login{" "}
              </button>
            </div>
          </section>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
