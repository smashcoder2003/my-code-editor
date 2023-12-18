export default function TestWindow() {
   return (
      <>
         <div className="testEditor">
               <div className="testEditorMenu">
                  <div className="testEditorMenuItem">TestCases</div>
               </div>
               <div className="testCaseWindow">
                  <div className="testCaseSubWindow">
                     <div className="testCase">
                        <p>Input<span><p>i : <code>123321</code></p></span></p>

                        <p>output: <code>True</code></p>
                        <p>expected output: <code>True</code></p>
                     </div>
                  </div>

                  <div className="testCase">Test2</div>
                  <div className="testCase">Test3</div>
                  <div className="testCase">Test3</div>
                  <div className="testCase">Test3</div>
                  <div className="testCase">Test3</div>
                  <div className="testCase">Test3</div>
                  <div className="testCase">Test3</div>
                  <div className="testCase">Test3</div>
               </div>

         </div>
      </>
   );
}