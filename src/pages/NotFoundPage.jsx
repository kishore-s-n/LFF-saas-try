import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="pt-40 w-full h-72 flex flex-col justify-center items-center relative">
        <h1 className="text-3xl text-center align-bottom">Hello <span className="text-blue-500 font-bold ">Buddy</span> Looks Like You are Lost.. In Studying</h1>
        <p>Let Me help you go back to the home page. Click the link below to continue studying</p>
        <Link to="/"><p className="text-white bg-blue-500 p-2 rounded-xl bg-slate-500">Lets Go</p></Link>
    </div>
  )
}

export default NotFoundPage