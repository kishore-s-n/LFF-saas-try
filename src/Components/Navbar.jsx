// import Logo from "../assets/logo.jpg";
import { IoBook } from "react-icons/io5";
import Button from "../Utils/Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navStyle="hover:text-black hover:bg-blue-300 p-2 rounded-xl hover:font-bold hover:duration-500";
  const activeNavStyle="bg-black hover:text-black hover:bg-blue-300 p-2 rounded-xl hover:font-bold hover:duration-500"
  return (
    <div className="absolute w-full flex justify-between p-7  bg-blue-600 border-b-2">
        <div className="flex gap-4 items-center justify-center">
            <IoBook fontSize="3rem"/>
            <h1 className="text-2xl p-3 font-bold text-white ">Learn From Friends</h1>
        </div>
        <nav>
            <ul className="flex text-2xl gap-5 text-white">
                <NavLink to="/"className={({isActive})=>isActive?`${activeNavStyle}`:`${navStyle}`}><Button btnstyle="" btncontent="Home"/></NavLink>
                <NavLink to="/notes" className={({isActive})=>isActive?`${activeNavStyle}`:`${navStyle}`}><Button  btncontent="Notes"/></NavLink>
                <NavLink to="/courses"className={({isActive})=>isActive?`${activeNavStyle}`:`${navStyle}`}><Button  btncontent="Courses"/> </NavLink>
            </ul>             
        </nav>
    </div>
  )};

export default Navbar;
