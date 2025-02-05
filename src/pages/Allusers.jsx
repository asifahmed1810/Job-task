import React, { useEffect, useState } from 'react';

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
      <h2 className='font-semibold text-xl mb-6'>All Users</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
        {users.map((user) => (
          <div key={user.id} className='card bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title text-lg'>Name: {user.name}</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>City:</strong> {user.address.city}</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allusers;
