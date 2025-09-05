import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Design from "@/components/Design";
import Stack from "@/components/Stack";
import Marque from "@/components/Marquee";
import Footer from "@/components/Footer";
import Image from "next/image";

const Page = () => {
  return (
    <div
      className=" selection:bg-[#dcff1e] selection:text-neutral-800 max-w-full h-full relative
    font-main"
    >
      <Navbar />
      <Hero/>   
      <Design/>
      <Stack/>
      <Marque/>
      <Footer/>
      
      

    </div>
  );
};

export default Page;
