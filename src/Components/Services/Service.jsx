import { Link } from 'react-router-dom';


const Service = ({Service}) => {

    const {id,image,service_name} = Service || {}

    return (
        <Link to={`/sevicesDetails/${id}`}>
        <div className="bg-base-100 shadow-xl rounded-xl">
                   <figure className="px-10 pt-10">
                       <img src={image} className="w-96 h-56 rounded-xl" />
                   </figure>
                   <div className="card-body items-center text-center">
                       <h2 className="card-title">{service_name}</h2>
                       <p className='lg:text-2xl font-bold'>$10000</p>
                       <div className="card-actions">
                           <button className="btn bg-purple-900 hover:bg-purple-800 text-white">View Details</button>
                       </div>
                   </div>
               </div>
       </Link>
    );
};

export default Service;

