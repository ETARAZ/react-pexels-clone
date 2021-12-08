import React, { useState } from "react";
import {
  DownloadIcon,
  HeartIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

function Media({ media }) {
  const [load, setLoad] = useState(true);
  return (
    <div
      className={`relative !bg-green-500 group w-full`}
    >
      <img
        onLoad={() => setLoad(false)}
        width={media.width}
        height={media.height}
        className="w-full bg-transparent h-full"
        src={media.download_url}
        loading="lazy"
      />
      <div className="w-full absolute h-20 lg:hidden lg:group-hover:flex  justify-between items-center right-0 left-0 bottom-0 bg-small-shadow px-2">
        <div className="absolute ml-2 mb-2 lg:flex  hidden bottom-0 left-0 cursor-pointer text-white  items-center">
          <UserCircleIcon className="w-8 h-8 mr-1" />
          <span className="text-17 leading-4 font-light">{media.author}</span>
        </div>

        <div className="space-x-2 absolute flex bottom-0 mr-2 mb-2 right-0">
          <a href={media.download_url}>
            <DownloadIcon className="lg:w-6 opacity-90 hover:opacity-100 w-5 h-5 text-white lg:h-6" />
          </a>
          <PlusCircleIcon className="hidden opacity-90 hover:opacity-100 cursor-pointer w-6 h-6 text-white lg:block" />
          <HeartIcon className="hidden opacity-90 hover:opacity-100 cursor-pointer w-6 h-6 text-white lg:block" />
        </div>
      </div>
    </div>
  );
}

export default Media;
