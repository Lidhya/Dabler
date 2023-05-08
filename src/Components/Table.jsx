import React from "react";

const Table = ({ data }) => {
  console.log(data);
  return (
    <table>
      <thead className="sticky top-0 z-10 h-10 bg-white ">
        <tr className="border-b-2 p-2">
          {Object.keys(data[0]).map((key, index) => (
            <th key={index}>{key.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} >
            {Object.values(item).map((value, index) => (
              <td key={index} className="p-2">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
