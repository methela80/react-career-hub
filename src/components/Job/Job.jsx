import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Job = ({ job }) => {
  const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements} = job;
  return (
    <div className="card card-compact bg-base-100 shadow-lg">
      <figure>
        <img
          src={logo} alt="logo"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p className="flex justify-start">{company_name}</p>
        <div className="flex justify-start">
            <button className="px-5 py-2 text-base font-extrabold text-[#7E90FE] border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 text-base font-extrabold text-[#7E90FE] border rounded border-[#7E90FE] mr-4">{job_type}</button>
        </div>
        <div className='flex'> 
            <h2 className='flex justify-start mr-6'><CiLocationOn className='text-2xl mr-2'></CiLocationOn>{location}</h2>
            <h2 className='flex'><AiOutlineDollarCircle className='text-2xl mr-2'></AiOutlineDollarCircle>Salary: {salary}</h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
          <button 
          className="px-5 py-3 text-xl font-extrabold text-white rounded bg-gradient-to-r from-blue-500 to-purple-400">
          View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
