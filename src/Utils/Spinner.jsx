/* eslint-disable react/prop-types */
import { ClipLoader } from "react-spinners"


const Spinner = ({loading}) => {

    const overide={
        display:"block",
        margin:"100px auto"
    }
    

    return (
    <div>
        <ClipLoader
            color="blue"
            loading={loading}
            size={150}
            cssOverride={overide}
        />
    </div>
  )
}

export default Spinner