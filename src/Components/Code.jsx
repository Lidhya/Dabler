import React, { useEffect, useState } from "react";
import Explorer from "./Explorer";
import CodeEditor from "./CodeEditor";
import Table from "./Table";

const Code = () => {
  const [data, setData] = useState([]);
  const [code, setCode] = useState("");
  const [tableData, setTableData] = useState([]);
  const [err, setErr] = useState("");

  const handleDataChange = (newData) => {
    setCode(newData);
  };

  useEffect(() => {
    if (code === "") {
      setTableData([]);
      setErr("");
    }
  }, [code]);

  useEffect(() => {
    try {
      fetch(
        "https://transform.dabler.app/api/test/getdbobjects?datawarehouse=SNOWFLAKE-DEV"
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setErr("");
        })
        .catch((error) => setErr(error.message))
        .catch((error) => setErr(error.message));
    } catch (error) {
      setErr(error.message);
      console.log(error.message);
    }
  }, []);

  const handleRun = (e) => {
    e.preventDefault();
    try {
      if (code) {
        fetch("https://transform.dabler.app/api/test/queryRun", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            datawarehouse: "SNOWFLAKE-DEV",
            query: code,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            setTableData(data.result);
            setErr("");
          })
          .catch((error) => setErr(error.message))
          .catch((error) => setErr(error.message));
      } else {
        setTableData([]);
        setErr("");
      }
    } catch (error) {
      setErr(error.message);
      console.log(error.message);
    }
  };

  return (
    <>
      {err && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-3 p-4 mb-4 text-sm text-white rounded-lg bg-red-500"
          role="alert"
        >
          <span className="font-medium">{err}</span>
        </div>
      )}
      <div className="text-end  mx-6">
        {" "}
        <button
          onClick={handleRun}
          className="bg-green-500 text-white w-24 p-1 font-medium -top-3 relative"
        >
          TEST RUN
        </button>
      </div>
      <div className="h-3/6 flex gap-2">
        <div className=" w-1/5 bg-white m-1 rounded">
          {data &&
            data.map(
              (items) =>
                items.schemas[0] && <Explorer key={items._id} data={items} />
            )}
        </div>
        <div className=" w-4/5 bg-white m-1 rounded">
          <CodeEditor onDataChange={handleDataChange} />
        </div>
      </div>
      <div className="h-2/6 bg-white m-2 p-2 pt-0 overflow-scroll rounded">
        {tableData[0] ? (
          <Table data={tableData} />
        ) : (
          <div className="text-center text-lg p-5 text-gray-400">
            No data available
          </div>
        )}
      </div>
    </>
  );
};

export default Code;
