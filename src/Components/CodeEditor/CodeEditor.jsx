import "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/webpack-resolver";
import AceEditor from "react-ace";


export default function CodeEditor() {
   const code = "def myfunc():\n  pass";
   return (
      <AceEditor
         value={code}
         mode="python"
         theme="monokai"
         fontSize="16px"
         highlightActiveLine={true}
         setOptions={{
            enableLiveAutocompletion: true,
            showLineNumbers: true,
            tabSize: 2
         }}
         style={{
            width: "100%",
            borderRadius: '3.5px',
            height: "100%",
         }}
      />
   );
}