import notes from '../jobs.json'
import Noteslisting from './Noteslisting'
const Notessection = () => {
  return (
    <div className='bg-blue-200'>
      <h1 className='text-center py-10 text-blue-500 text-3xl lg:text-5xl font-extrabold'>Browse Notes</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full ' > 
          {notes.map((note)=>(
              <Noteslisting key={note.id} note={note}/> 
          ))}
      </div>
    </div>
  )
}

export default Notessection