import { Link } from 'react-router-dom';
import '../../index.css';
export default function NavBar() {
   return (
      <>
         <div className= "flex flex-row border-b-gray-500 border-b-2">
            <div className="NavBarComponent">
               <Link to='/'>Home</Link>
            </div>

            <div className="NavBarComponent">Assignments</div>

            <div className="NavBarComponent">
               <Link to={'/profile'}>Profile</Link>
            </div>
         </div>
      </>

   );
}
