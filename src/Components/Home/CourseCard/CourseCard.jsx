import '../home.css';
import { Link } from "react-router-dom";


export default function CourseCard({ img, title, description }) {
   return(
      <>
         {/* Should change the link Accordingly */}
         <Link to={'/courseDetails/Operating Systems'} style={{height: '100%'}}>
            <div className="courseCard">
                  <div className="courseImg">
                     <img src={ img } alt= "operating systems icon"/>
                  </div>


                  <div className="courseContent">
                     <div className="courseTitle">
                        { title }
                     </div>
                     <div className="courseDescription">
                        <p>{ description }</p>
                     </div>
                  </div>
            </div>
         </Link>
      </>
   );
}