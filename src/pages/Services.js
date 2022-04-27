import React from 'react';
import { useQuery } from 'react-query';
import { getServices } from '../utils/query';
import { Link } from 'react-router-dom';

const Services = () => {
  const { isLoading, isError, data, error, isFetched } = useQuery(
    'users',
    getServices
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <div className="px-3 h-">
      <h2 className="font-bold text-center mt-5 text-3xl">List of services</h2>
      <div className="flex justify-start flex-wrap my-10 gap-5">
        {data.map(({ id, logo_url, name, price, website_url }) => (
          <Link to={'/service/' + id}>
            <div
              key={id}
              className="w-40 h-40 mb-5 flex flex-col justify-between items-center shadow-lg rounded-lg border-0 border-siit"
            >
              <img src={logo_url} className="w-20 h-20 mt-2" />
              <p className="mb-2">{name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
