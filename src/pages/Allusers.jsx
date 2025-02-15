import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UsersCard from './UsersCard';

const Allusers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
        <h2 className="text-3xl font-bold text-center mb-6">All Users</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {users.map((user) => (
          <UsersCard key={user.id} user={user}></UsersCard>
        ))}
      </div>
    </div>
  );
};

export default Allusers;
