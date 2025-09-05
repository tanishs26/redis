import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";
const Card = ({
  src,
  title,
  icon: Icon,
  desc,
}: {
  src?: string;
  title?: string;
  desc?: string;
  icon?: IconType;
}) => {
  return (
    <button className=" w-full mx-auto p-4 md:pb-0 max-h-full focus:border-[#dcff1e] bg-[#0d212c]   md:min-h-[360px] rounded-xl border-2 border-white/5 flex hover:border-white/20  text-white flex-col">
      <div className=" text-start md:mt-2">
        <h1 className="font-medium flex justify-between md:justify-start   items-center gap-2 text-lg">
          {title}
          {Icon && <Icon />}
        </h1>
        <p className="text-sm md:mt-5  mt-2">{desc}</p>
      </div>
      <div className="w-full hidden md:flex h-[100%] relative  object-fit overflow-hidden">
        {src && (
          <Image
            src={src}
            fill
            className="scale-105 hover:scale-110 cursor-pointer transition-all duration-700"
            draggable={false}
            alt="no-img"
          />
        )}
      </div>
    </button>
  );
};

export default Card;
