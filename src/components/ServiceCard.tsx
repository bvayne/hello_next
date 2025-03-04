import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  img_preview: string;
  title: string;
  isActive: boolean;
  text: string;
  avatar: string;
  price: string;
  currency: string;
  country: string;
  date?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  img_preview,
  text,
  avatar,
  price,
  country,
  date,
  currency,
  isActive,
}) => {
  return (
    <div
      className={`realtive ml-4 h-96 w-full cursor-pointer transition-transform duration-500 sm:ml-0 sm:h-[50vh] ${isActive ? 'scale-95 hover:scale-100' : 'scale-90 hover:scale-95'}`}
    >
      <Image
        className="h-full w-full rounded-lg object-cover object-center shadow-md"
        src={img_preview}
        alt={title}
        width={300}
        height={400}
      />
      <div className="absolute bottom-20 left-0 right-0 top-0 flex flex-col items-center justify-center p-4 text-white">
        <div className="text-lg font-bold text-white">
          {currency} {price}
        </div>
        <div className="mt-2 rounded-full bg-white px-4 py-1 text-xs text-black">{country}</div>
      </div>
      <div className="items-top absolute bottom-0 left-0 right-0 m-4 flex rounded-lg bg-white px-2 py-3 text-xs text-white shadow">
        <div className="flex w-full overflow-hidden">
          <p className="flex h-8 w-8 items-center justify-center rounded-full border bg-white text-gray-600">
            {avatar}
          </p>
          <div className="ml-2 flex flex-1 items-center overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <p className="max-w-full overflow-hidden truncate text-gray-800">{text}</p>
              {date && <p className="text-gray-600">{date}</p>}
            </div>
            <div className="ml-2 self-start">
              <p className="text-gray-800">{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
