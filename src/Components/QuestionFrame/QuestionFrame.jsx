import '../../index.css'
export default function QuestionFrame() {
   return(
      <>
         <div className= "questionFrame">
            <div className="questionFrameMenu">
               <div className="questionFrameMenuItem">Description</div>
               <div className="questionFrameMenuItem">Editorial</div>
               <div className="questionFrameMenuItem">Submissions</div>
            </div>


            <div className="questionFrameContent">
               <div className="questionHeader">
                  <p>1. Palindrome</p>
               </div>
               <div className="questionDescription">
                  <p>Given an integer <span>i</span> consectetur adipisicing elit. Deserunt earum exercitationem illum,
                     iste <span>molestiae mollitia nostrum,</span> porro quae quidem rem repudiandae saepe sint tempora tempore,
                     ut veritatis vitae voluptates. Aliquam at, cumque doloribus, ducimus, est eum harum magni
                     maiores minus molestiae necessitatibus nisi nulla reiciendis rerum soluta veritatis voluptates!
                     Aliquid aperiam, aspernatur at consequuntur culpa delectus ducimus ea earum eius eos error
                     inventore ipsam iure laborum magnam maxime minima minus modi molestiae molestias nam neque
                     obcaecati, odio optio placeat porro praesentium quam quasi qui quidem quod repudiandae saepe sed
                     velit vero voluptates voluptatibus? Accusantium excepturi facilis nam quaerat recusandae,
                     repellendus
                  </p>
               </div>
               <div className="testCases">
                  <div className="test">
                     <p>Test 1</p>
                     <p>Input: <span>123321</span></p>
                     <p>Output: <span>True</span></p>
                  </div>
                  <div className="test">
                     <p>Test 2</p>
                     <p>Input: <span>1234</span></p>
                     <p>Output: <span>False</span></p>
                  </div>
                  <div className="test">
                     <p>Test 3</p>
                     <p>Input: <span>1</span></p>
                     <p>Output: <span>True</span></p>
                  </div>
                  <div className="test">
                     <p>Constraints</p>
                     <span>1 &lt;= i &lt;= 10^9</span>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}