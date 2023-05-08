import React, { useState } from "react";

const CodeEditor = ({ onDataChange }) => {
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
    onDataChange(e.target.value);
  };

  return (
    <div className="flex flex-row">
      <div className="w-16 flex flex-col justify-start items-center">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="text-gray-600 text-sm font-mono">
            {index + 1}
          </div>
        ))}
      </div>
      <textarea
        className="flex-1 bg-transparent outline-none p-2 font-mono text-sm resize-none"
        value={code}
        onChange={handleChange}
      />
    </div>
  );
};

export default CodeEditor;
