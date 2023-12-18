import { Link } from "react-router-dom";

export default function ProblemStatementCard() {
   return(
      <>
            <div className="problemStatementCard">
               <Link to="/codeground">
               <div className="statementCardHeader">
                  <h4>Least Recently Used Page Replacement Algorithm</h4>
               </div>
               <div className="tagsWindow">
                  <div className="statementTags">
                     <span>python</span>
                     <span>os</span>
                     <span>paging</span>
                     <span>Easy</span>
                  </div>
               </div>
               </Link>
            </div>


      </>
   );
}