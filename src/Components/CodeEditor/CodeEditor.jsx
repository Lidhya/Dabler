import React, { useEffect, useState } from "react";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/theme-cloud9_day";
import "ace-builds/src-noconflict/mode-sql";
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/ext-beautify";
import "./CodeEditor.css";

function CodeEditor({ onDataChange, initialCode }) {
  const [code, setCode] = useState(initialCode || "");
  const handleEditorChange = (newValue) => {
    setCode(newValue);
    onDataChange(newValue);
  };

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  return (
    <div className="overflow-hidden rounded">
      <AceEditor
        mode="sql"
        theme="cloud9_day"
        name="my-editor"
        onChange={handleEditorChange}
        fontSize={14}
        highlightActiveLine={true}
        value={code}
        editorProps={{
          $blockScrolling: true,
        }}
      />
    </div>
  );
}
export default CodeEditor;
