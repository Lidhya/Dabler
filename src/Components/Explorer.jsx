import React, { useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

const Explorer = ({ data }) => {
    const [show, setShow] = useState(0)
  const { schemas } = data;
  return (
    <>
      {schemas[0] &&
        schemas.map((x) => (
          <div className="flex flex-col p-5 pb-0" key={x.schema}>
            <div id="Schema" className="flex gap-2 mb-1">
              <FolderOpenOutlinedIcon />
              <span>{x.schema}</span>
            </div>
            <ul>
              <li className="flex flex-col m-1 ">
                <div className="flex gap-2 " onClick={()=>{show !==1? setShow(1) : (show ===1? setShow(0): setShow(1)) }}>
                  <KeyboardArrowRightIcon />
                  <FolderIcon />
                  <span>Tables</span>
                </div>
                {x.tables[0] && show===1 && (
                  <ul className="text-center">
                    {x.tables.map((item,index) => (
                      <>
                        <li key={index}>{item}</li>
                      </>
                    ))}
                  </ul>
                )}
              </li>
              <li className="flex flex-col m-1 ">
                <div className="flex gap-2 " onClick={()=>{show !==2? setShow(2) : (show ===2? setShow(0): setShow(2)) }}>
                  <KeyboardArrowRightIcon />
                  <FolderIcon />
                  <span>Views</span>
                </div>
                {x.views[0] && show===2 && (
                  <ul className="text-center">
                    {x.tables.map((item,index) => (
                      <>
                        <li key={index}>{item}</li>
                      </>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        ))}
    </>
  );
};

export default Explorer;
