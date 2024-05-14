/* eslint-disable react/prop-types */

const Button = (props) => {
  return (
    <button className={`${props.btnstyle} cursor-pointer p-2 text-white font-extrabold rounded-lg`}>{props.btncontent}</button>
  )
}
export default Button