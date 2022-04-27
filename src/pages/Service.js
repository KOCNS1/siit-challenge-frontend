import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getUsersOfService } from '../utils/query';

const Service = () => {
  let { id } = useParams();
  const { state } = useLocation();

  const { isLoading, isError, data, error, isSuccess } = useQuery(
    ['activities', id],
    () => getUsersOfService(id)
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="px-3 h-">
      <h2 className="font-bold text-center mt-5 text-3xl">
        List of users of the service: {state.name}
      </h2>
      <div className="flex justify-start flex-wrap my-10 gap-5">
        {data.map(({ id, avatar_url, name, position, service_ids }) => (
          <div
            key={id}
            className="w-40 h-40 mb-5 flex flex-col justify-between items-center shadow-lg rounded-lg border-0 border-siit"
          >
            <img src={avatar_url} className="w-20 h-20 mt-2" />
            <p className="mb-2">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
