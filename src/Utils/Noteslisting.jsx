/* eslint-disable react/prop-types */

import Button from "./Button"

const Noteslisting = (props) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg m-5" >
        <h3>{props.note.type}</h3>
        <h1 className="text-xl font-bold pb-10">{props.note.title}</h1>
        <p className="font-semibold">{props.note.description}</p>
        <p className="text-purple-700 py-5">{props.note.salary}</p>
        <hr />
        <div className="flex justify-between py-5">
            <p className="text-amber-800">{props.note.location}</p>
            <Button btnstyle="p-3 rounded-lg shadow-lg bg-blue-400" btncontent="Read More"/>
        </div>
    </div>
  )
}

export default Noteslisting