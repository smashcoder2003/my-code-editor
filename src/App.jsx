import './index.css';
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import CodeGround from "./Components/CodeGround/CodeGround";
import ProblemStatementWindow from "./Components/Home/ProblemStatementWindow/ProblemStatementWindow";

export default function App() {
    return (
       <>
          <HashRouter>
             <div className="home">
                <NavBar />
                <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/profile" element={<Profile />} />
                   <Route path="/courseDetails">
                      <Route path="Operating Systems" element={<ProblemStatementWindow />} />
                   </Route>
                   <Route path="/codeground" element={<CodeGround />} />
                </Routes>
             </div>
          </HashRouter>
       </>
    );
}

