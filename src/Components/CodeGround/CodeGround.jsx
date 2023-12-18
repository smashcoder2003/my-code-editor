import '../../index.css';
import QuestionFrame from "../QuestionFrame/QuestionFrame";
import QuestionEditor from "../QuestionEditor/QuestionEditor";

export default function CodeGround() {
   return (
      <>
         <div className= "codeGroundComponent">
            <QuestionFrame />
            <QuestionEditor />
         </div>
      </>
   );
}

