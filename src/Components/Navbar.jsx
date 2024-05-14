// import Logo from "../assets/logo.jpg";
import { IoBook } from "react-icons/io5";
import Button from "../Utils/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between p-7  bg-blue-600">
        <div className="flex gap-4 items-center justify-center">
            <IoBook fontSize="3rem"/>
            <h1 className="text-2xl p-3 font-bold text-white ">Learn From Friends</h1>
        </div>
        <nav>
            <ul className="flex text-2xl gap-5 text-white">
                <Button btnstyle="" btncontent="Home"/>
                <li className="bg-black p-3 rounded-md hover:bg-white hover:text-black hover:duration-300">
                    Home
                </li>
                <li className="bg-black p-3 rounded-md hover:bg-white hover:text-black hover:duration-300">
                    Notes
                </li>
                <li className="bg-black p-3 rounded-md hover:bg-white hover:text-black hover:duration-300">
                    Courses
                </li>
            </ul>             
        </nav>
    </div>
  )};

export default Navbar;
