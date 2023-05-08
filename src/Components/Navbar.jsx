import React from "react";

const Navbar = () => {
  return (
    <div className="my-3 bg-white w-full flex justify-between p-3 px-8">
      <div className="flex gap-2 items-center justify-start flex-wrap">
        <span className="font-bold text-2xl">Project1 Model1</span>
        <span className="text-gray-400">|   Transformation Object</span>
      </div>
      <div className="flex text-white gap-4 mr-16 flex-wrap">
        <button className="bg-blue-500 p-1 w-24">Save</button>
        <button className="bg-red-400 p-1 w-24">Deploy</button>
      </div>
    </div>
  );
};

export default Navbar;
