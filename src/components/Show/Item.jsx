import React from "react";

function Item({text}) {
  return (
    <div
      className="text-17 cursor-pointer leading-none flex items-center font-semibold w-full h-full mt-0 mb-0  py-3 px-5 transition-colors whitespace-nowrap text-[#5e5e5e] hover:bg-[#e8e8e8] hover:text-[#1a1a1a]"
    >
      <span>{text}</span>
    </div>
  );
}

export default Item;
