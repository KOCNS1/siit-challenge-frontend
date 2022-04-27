import React from 'react';
import { useQuery } from 'react-query';
import { getUsers, getServicesByIds } from '../utils/query';
import User from '../components/User';

const Home = () => {
  const { isLoading, isError, data, error, isFetched } = useQuery(
    'users',
    getUsers
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div className="px-3">
      {data.map(({ id, avatar_url, name, position, service_ids }) => (
        <User
          key={id}
          avatar_url={avatar_url}
          name={name}
          position={position}
          service_ids={service_ids}
        />
      ))}
    </div>
  );
};

export default Home;
