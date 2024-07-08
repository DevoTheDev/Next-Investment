"use client";
import React from 'react';

interface HeaderWithDropDownProps {
  title: string;
  description: string;
}

const HeaderWithDropDown: React.FC<HeaderWithDropDownProps> = ({ title, description }) => {
  return (
    <th className="relative px-4 py-2 
    cursor-pointer group text-customCream
    hover:text-customCyanDark hover:bg-gray-800 rounded-t-lg">
      {title}
      <div className="absolute left-1/2 transform 
      -translate-x-1/2 mt-2 w-full p-2 bg-gray-800 rounded-b-md
      shadow-lg z-10 hidden group-hover:block transition-all 
      duration-300 opacity-0 group-hover:opacity-100
      text-xs
      text-customCream
      md:text-sm
      md:w-full
      md:border-4
      md:border-gray-800
      md:left-1/2 
      md:-translate-x-1/2
      ">
        {description}
      </div>
    </th>
  );
};

export default HeaderWithDropDown;

