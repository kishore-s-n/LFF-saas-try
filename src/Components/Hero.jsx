/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Hero = (props) => {
    Hero.PropTypes={
        title: PropTypes.string,
        subhead: PropTypes.string
    }
    return (
    <div className='relative top-28 h-96 bg-blue-600 flex flex-col items-center justify-center  py-60'>
        <h1 className=' text-3xl lg:text-5xl font-extrabold text-white'>{props.title}</h1>
        <h2 className='text-white'>{props.subhead}</h2>        
    </div>
  );
  
};

export default Hero;
