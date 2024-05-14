/* eslint-disable react/prop-types */

import { useState } from "react";
import Button from "./Button"

const Noteslisting = (props) => {
  
  const[showFullDescription,setShowFullDescription]=useState(false) 
    let description = props.note.description;

  if(!showFullDescription){
    description=description.substring(0,90)+"...";
  }
  
    return (
    <div className="bg-white p-5 rounded-xl shadow-lg m-5" >
        <h3>{props.note.type}</h3>
        <h1 className="text-xl font-bold pb-10">{props.note.title}</h1>
        <p className="font-semibold">{description}</p>
        <button className="text-indigo-500 mb-5 hover:text-indigo-600" onClick={()=>setShowFullDescription((prevState)=>(!prevState))}>{showFullDescription? 'Less':'More'}</button>

        <p className="text-purple-700 py-5">{props.note.importance}</p>
        <hr />
        <div className="flex justify-between py-5">
            <p className="text-amber-800">{props.note.accuracy}</p>
            <Button btnstyle="p-3 rounded-lg shadow-lg bg-blue-400" btncontent="Read More"/>
        </div>
    </div>
  )
}

export default Noteslisting