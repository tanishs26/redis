"use client";
import React, { useState } from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
  { code: "ja", label: "日本語" },
  { code: "hi", label: "हिन्दी" },
];

const LanguageSelect = () => {
  const [selected, setSelected] = useState("en");

  return (
    <div className="">
      <div className="w-30 h-10">
     
        <select
          id="language"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full px-2  bg-[#152f3d]/20 cursor-pointer border border-gray-600 rounded-md text-white text-xs py-1 focus:outline-none focus:ring-1 focus:ring-white/10 focus:border-blue-500 transition-all"
        >
          {languages.map((lang) => (
            <option
              key={lang.code}
              value={lang.code}
              className="bg-[#091a23] text-white"
            >
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageSelect;
