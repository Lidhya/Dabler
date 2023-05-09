import React, { useState } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

const Explorer = ({ data, setCode }) => {
  const [show, setShow] = useState(0);
  const { schemas, database } = data;
  const handleClick = (schemaName, item) => {
    const DB_NAME = database.toLowerCase();
    const SCHEMA = schemaName.toLowerCase();
    const ITEM_NAME = item.toLowerCase();
    setCode(`select * from ${DB_NAME}.${SCHEMA}.${ITEM_NAME}`);
  };
  return (
    <>
      {schemas[0] &&
        schemas.map((x, index) => (
          <div className="flex flex-col p-5 pb-0 flex-wrap" key={index}>
            <div id="Schema" className="flex gap-2 mb-1 flex-wrap">
              <FolderOpenOutlinedIcon />
              <span>{x.schema}</span>
            </div>
            <ul>
              <li className="flex flex-col flex-wrap m-1 ">
                <div
                  className="flex gap-2 flex-wrap"
                  onClick={() => {
                    show !== 1
                      ? setShow(1)
                      : show === 1
                      ? setShow(0)
                      : setShow(1);
                  }}
                >
                  <KeyboardArrowRightIcon />
                  <FolderIcon />
                  <span>Tables</span>
                </div>
                {x.tables[0] && show === 1 && (
                  <ul className="text-center">
                    {x.tables.map((item, index) => (
                      <li className="cursor-pointer" key={index} onClick={() => handleClick(x.schema, item)}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="flex flex-col m-1 flex-wrap">
                <div
                  className="flex gap-2 flex-wrap"
                  onClick={() => {
                    show !== 2
                      ? setShow(2)
                      : show === 2
                      ? setShow(0)
                      : setShow(2);
                  }}
                >
                  <KeyboardArrowRightIcon />
                  <FolderIcon />
                  <span>Views</span>
                </div>
                {x.views[0] && show === 2 && (
                  <ul className="text-center">
                    {x.tables.map((item, index) => (
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
