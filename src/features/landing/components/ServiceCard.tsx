import React from 'react'
import { ServiceCardProps } from '../../../utils/types';
// import LearnMoreBtn from './LearnMoreBtn';

const ServiceCard: React.FC<ServiceCardProps> = ( { img, title, desc }) => {
  return (
    <div
      className="w-[320px] h-[300px] bg-white rounded-3xl border border-sky-800 p-[30px]"
    >
      <div className="mb-[31px]">
        <img src={img} alt="service-icon" />
      </div>
      <h3 className="text-black text-[25px] font-medium capitalize mb-[30px]">
        {title}
      </h3>
      <p className="mb-[30px] text-black text-opacity-60 text-xs font-normal leading-[27px]">
        {desc}
      </p>
      {/* <LearnMoreBtn /> */}
    </div>
  );
}

export default ServiceCard