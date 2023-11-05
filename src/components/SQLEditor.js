import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";

const SQLEditor = ({ onExecute }) => {
  const [sql, setSql] = useState("");

  const handleExecute = () => {
    onExecute(sql);
  };

  const handleEditorChange = (value, event) => {
    setSql(value);
  };

  return (
    <Box flex="1" padding="20px">
      <Editor
        height="400px"
        defaultLanguage="sql"
        value={sql}
        onChange={handleEditorChange}
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          lineNumbers: true,
          theme: "snow"
        }}
      />
      <Button onClick={handleExecute} marginTop="20px">
        Execute
      </Button>
    </Box>
  );
};

export default SQLEditor;
