import React from "react";
import { MdOutlineArrowDropDown } from "../Navbar/icons";
import Item from "./Item";
function Dropdown({ text, data }) {
  return (
    <div className="relative block group">
      <div className="flex cursor-pointer relative h-full text-17 leading-none font-normal mt-0 mb-0  decora p-0  transition-opacity whitespace-nowrap opacity-75">
        {text} <MdOutlineArrowDropDown className="text-lg" />
      </div>
      <div className="absolute left-auto hidden transi z-30 min-w-172 group-hover:block right-0 top-4   w-full">
        <div className="relative mt-5 rounded-sm shadow-sm bg-white h-full w-full">
          <div className="absolute rounded-sm shadow-sm bg-white -z-1 rotate-45  right-5 -top-1 h-arrow-height w-arrow-width"></div>

          <ul class="py-2 z-10">
            {data.map((e) => (
              <Item text={e.text} path={e.path} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
