/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Noteslisting from './Noteslisting'
import { useEffect, useState } from 'react';
import Spinner from './Spinner';


const Notessection = ({isHome = false}) => {
  // let recentnotes=isHome?notes.slice(0,3):notes;
  const[notes,setNotes]=useState([])
  const[loading,setLoading]=useState(true)
  
  
  useEffect(()=>{
    const fetchNotes=async()=>{
      const apiUrl=isHome?"/api/notes?_limit=3":"/api/notes";
      try {
        const res=await fetch(apiUrl)
        const data=await res.json();
        setNotes(data);
      } catch (error) {
        console.log('Error while data fetch',error);
      }finally{
        setLoading(false)
      }
    }
    fetchNotes()
  },[])

  return (
    <div className='bg-blue-200 flex flex-col items-center'>
      <h1 className='text-center py-10 text-blue-500 text-3xl lg:text-5xl font-extrabold'>{isHome?"Recent Notes" :"All Notes"}</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full ' > 
          {loading?(<Spinner loading={loading}/>): <>
          
            {notes.map((note)=>(
              <Noteslisting key={note.id} note={note}/> 
            ))}
          </>}
      </div>
      <button className='bg-black w-max cursor-pointer text-white text-xl font-bold p-2 rounded-xl my-5 '><Link to="/notes">View More Notes</Link></button>
    </div>
  )
}

export default Notessection