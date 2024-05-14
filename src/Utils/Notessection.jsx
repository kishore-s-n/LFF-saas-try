import { Link } from 'react-router-dom';
import notes from '../jobs.json'
import Noteslisting from './Noteslisting'
const Notessection = () => {
  let recentnotes=notes.slice(0,3);
  return (
    <div className='bg-blue-200 flex flex-col items-center'>
      <h1 className='text-center py-10 text-blue-500 text-3xl lg:text-5xl font-extrabold'>Browse Notes</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full ' > 
          {recentnotes.map((note)=>(
            <Noteslisting key={note.id} note={note}/> 
          ))}
      </div>
      <button className='bg-black w-max cursor-pointer text-white text-xl font-bold p-2 rounded-xl my-5 '><Link to="/notes">View More Notes</Link></button>
    </div>
  )
}

export default Notessection