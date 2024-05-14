import Hero from "./Components/Hero"
import Homecard from "./Components/Homecard"
import Navbar from "./Components/Navbar"
import Notessection from "./Utils/Notessection"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="Learn, share and Educate" subhead="We learn better by teaching others.." />
      <div className="w-full flex p-10 justify-around flex-col md:flex-row">
        <Homecard 
          title="For Students" 
          subhead="Browse for notes and courses from your friends and start learning today.." 
          btncontent="Browse Notes"
          accent="bg-gray-300" 
          btncolor="bg-black"
        />
        <Homecard 
          title="For Students" 
          subhead="Add your valuable notes to the upcoming learners to follow and cherish.." 
          btncontent="Add Notes" 
          accent="bg-blue-300" 
          btncolor="bg-blue-700"
        />
      </div>
      <Notessection />
    </>

  )
}

export default App
