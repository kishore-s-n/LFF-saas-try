/* eslint-disable react/prop-types */


const Homecard = (props) => {
    return (
    <div className={` lg:w-2/5 flex flex-col justify-between p-5 m-5 rounded-xl ${props.accent} shadow-2xl`} >
        <div className="font-sans pb-10">
            <h1 className="text-3xl lg:text-4xl font-extrabold" >{props.title}</h1>
            <h2 className="mt-2">{props.subhead}</h2>
        </div>
        <button className={` w-max ${props.btnstyle}`}>{props.btncontent}</button>
    </div>
  )
}

export default Homecard