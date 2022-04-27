import React from 'react';
import { getServicesByIds } from '../utils/query';
import { useQuery } from 'react-query';

const User = ({ avatar_url, name, position, service_ids }) => {
  const { isLoading, isError, data, error, isSuccess } = useQuery(
    ['services', service_ids],
    () => getServicesByIds(service_ids)
  );
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 my-3">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto md:mx-0"
        src={avatar_url}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <div className="text-lg font-medium flex md:justify-start flex-wrap sm:justify-center">
          {data.map((service) => {
            return (
              <div
                key={service.id}
                className="flex justify-center gap-5 border border-siit max-w-max bg-siit text-white p-1 rounded-lg gap-2 items-center shadow-lg shadow-siit mr-3 mb-3"
              >
                <p>{service.name}</p>
                <img src={service.logo_url} className="h-5 w-5"></img>
              </div>
            );
          })}
        </div>

        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400 text-lg font-semibold">
            {name}
          </div>
          <div className="text-slate-700 dark:text-slate-500 font-semibold">
            {position}
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default User;
