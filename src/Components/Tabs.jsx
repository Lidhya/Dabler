import React from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";
import TuneIcon from '@mui/icons-material/Tune';
import Code from "./Code";

const Tabs = () => {
  return (
    <>
    <div className="mx-7 bg-none -bottom-3 flex justify-start align-middle gap-10 text-gray-700 relative">
      <div id="details" className="font-medium flex items-center gap-2">
        <DataObjectIcon />
        <span>Details</span>
      </div>
      <div id="code" className="font-medium flex items-center gap-2">
        <TuneIcon />
        <span>Code</span>
      </div>
    </div>

<Code/>

    </>
  );
};

export default Tabs;
