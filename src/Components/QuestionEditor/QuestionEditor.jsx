import '../../index.css';
import CodeEditor from "../CodeEditor/CodeEditor";
import TestWindow from "../TestWindow/TestWindow";
export default function QuestionEditor() {
   return (
      <>
         <div className="userEditor">
               <div className="questionEditor">
                  <div className="questionEditorMenu">
                     <div className="questionEditorMenuItem">FontSize</div>
                     <div className="questionEditorMenuItem">Language</div>
                     <div className="questionEditorMenuItem">Retrieve Last Submission</div>
                  </div>
                  <CodeEditor />
               </div>
               <TestWindow />
         </div>
      </>
   )
}