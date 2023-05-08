import React, { useState } from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";
import TuneIcon from '@mui/icons-material/Tune';
import Code from "./Code";
import Details from "./Details";

const Tabs = () => {
    // 1 for details and 1 for code
    const [tab, setTab]=useState(1)
 
  return (
    <>
    <div className="mx-7 gap-5 bg-none -bottom-3 flex justify-start align-middle text-gray-700 relative ">
      <div id="details" className={`pb-3 px-3 font-medium flex items-center  cursor-pointer  ${tab ===1 && 'border-b-2 border-gray-700'}`}   onClick={() => setTab(1)}>
        <DataObjectIcon />
        <span>Details</span>
      </div>
      <div id="code" className={`pb-3 px-3 font-medium flex items-center cursor-pointer  ${tab ===2 && 'border-b-2 border-gray-700'}`}   onClick={() => setTab(2)}>
        <TuneIcon />
        <span>Code</span>
      </div>
    </div>
     {tab === 1? <Details/> : <Code/> }
    </>
  );
};

export default Tabs;
