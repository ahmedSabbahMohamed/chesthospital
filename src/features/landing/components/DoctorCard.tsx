import React from 'react'
import { Link } from 'react-router-dom';
import { DoctorCardProps } from '../../../utils/types';

const DoctorCard: React.FC<DoctorCardProps> = ( {img, docName, docSpeciality}) => {
  return (
    <Link
      className="block bg-white w-[150px] h-[200px] rounded-2xl overflow-hidden shadow-lg shadow-slate-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 hover:scale-110"
      to={`/`}
    >

      <div className="flex items-center justify-center w-full pt-5 pb-2">
        <img
          className="w-[100px] h-[100px] rounded-full"
          src={img}
          alt="doctor-img"
        />
      </div>

      <div className="text-center">
        
        <h3 className=" text-slate-800 font-semibold text-lg">{docName}</h3>

        <h4 className=" text-primary font-medium text-md">{docSpeciality}</h4>
      </div>
    </Link>
  );
}

export default DoctorCard