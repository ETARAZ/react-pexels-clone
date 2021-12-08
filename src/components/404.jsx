import React from "react";

function NotFound() {
  return (
    <div className="bg-gradient-to-b from-green-200 via-green-400 to-green-500">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-[#232a34] shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-6xl lg:text-9xl font-bold text-green-400">
              404
            </h1>
            <h1 className="text-2xl lg:text-6xl text-white font-medium py-8">
              oops! Page not found
            </h1>
            <p className="text-xl lg:text-2xl text-white pb-8 px-12 font-medium">
              Oops! The page you are looking for does not exist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
