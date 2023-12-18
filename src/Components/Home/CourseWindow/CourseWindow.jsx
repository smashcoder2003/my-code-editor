import '../home.css';


export default function CourseWindow({ children, title }) {
   return(
      <>
         <div className="courseWindow">
            <div className="courseWindowTitle">{ title }</div>
            { children }
         </div>
      </>
   )
}