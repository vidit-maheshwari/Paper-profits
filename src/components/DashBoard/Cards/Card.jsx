import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  return (
    <Link to="/">
    <div className="card-container bg-white w-52 h-36 border-2 border-slate-600 shadow-xl shadow-grey rounded-xl ">
      <div className="card-wrapper p-2">
        <div className="card-image flex-col justify-center items-center w-12 h-12 ml-3 relative p-2">
          <img src={props.image} alt="" />
        </div>
        <div className="card-content flex-col justify-center items-center text-wrap font-md text-base">
          <a className='card-name whitespace-pre-wrap' href='#'>{props.name}</a>
          <p className='ml-4 mt-2'><span className='t text-green-500 font-semibold text-lg'>{props.returns}</span> <span className='text-gray-400 text-sm'>(3 yr)</span></p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;
