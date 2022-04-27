import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getUsersOfService, getPrice } from '../utils/query';

const Service = () => {
  let { id } = useParams();
  const { state } = useLocation();
  const [price, setPrice] = useState(0);

  const { isLoading, isError, data, error, isFetched } = useQuery(
    ['activities', id],
    () => getUsersOfService(id)
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  const getprice = getPrice(
    state.price.flat_cost,
    state.price.cost_per_user,
    data.length,
    state.price.nb_users_included
  );
  getprice.then((price) => setPrice(price));

  return (
    <div className="px-3 h-">
      <h2 className="font-bold text-center mt-5 text-3xl">
        List of users of the service: {state.name}
      </h2>
      <div className="flex justify-evenly flex-wrap my-10 gap-5">
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
      <h2 className="font-bold text-center mt-5 text-3xl">
        Monthy cost: {price} &#36;
      </h2>
    </div>
  );
};

export default Service;
