import React from "react";
import { IconType } from "react-icons";

const NavHoverCard = ({
  icon: Icon,
  title,
  desc,
  size
}: {
  icon: IconType;
  desc: string;
  title: string;
  size?:number;
}) => {
  return (
    <div className="flex gap-6 w-full  items-center justify-center">
      <div className="w-[50px] flex shrink-0 justify-center items-center text-white/70 h-[50px] border-1 rounded-md mt-4 border-white/20 bg-[#163341]">
        {Icon && <Icon size={size} />}
      </div>
      <div className="w-full   ">
        <h1 className="pt-4 text-sm text-neutral-300">{title}</h1>
        <h1 className="text-xs text-neutral-400">{desc} </h1>
      </div>
    </div>
  );
};

export default NavHoverCard;
