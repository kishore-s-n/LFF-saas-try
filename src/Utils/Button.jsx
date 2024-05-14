/* eslint-disable react/prop-types */

const Button = (props) => {
  return (
    <button className={`${props.btnstyle}`}>{props.btncontent}</button>
  )
}
export default Button