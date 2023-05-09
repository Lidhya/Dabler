import React, { useState, useRef } from 'react';

function CodeEditor({ onDataChange }) {
  const [code, setCode] = useState('');
  const textareaRef = useRef(null);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    onDataChange(e.target.value);
  };

  const handleScroll = () => {
    const lineNumberWrapper = textareaRef.current.previousSibling;
    lineNumberWrapper.scrollTop = textareaRef.current.scrollTop;
  };

  const lines = code.split('\n').map((line, index) => (
    <div key={index} className="h-6 text-gray-400 text-right pr-2">
      {index + 1}
    </div>
  ));

  return (
    <div className="flex h-full w-full">
      <div className="w-10  text-gray-400 flex flex-col items-end justify-start">
        {lines}
      </div>
      <textarea
        placeholder='// Enter your query here...'
        ref={textareaRef}
        value={code}
        onChange={handleCodeChange}
        onScroll={handleScroll}
        className="flex-1 bg-white text-black  resize-none focus:outline-none"
      />
    </div>
  );
}

export default CodeEditor;
