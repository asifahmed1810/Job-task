import React from 'react';
import { useNavigate } from 'react-router-dom';

const UsersCard = ({user}) => {
    const navigate=useNavigate();
    return (
        <div  className='card bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title text-lg'>Name: {user.name}</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>City:</strong> {user.address.city}</p>
              <div className='card-actions justify-end'>
                <button onClick={()=>{navigate(`/userdetails/${user.id}`,{state:{user}} )}} className='btn btn-primary'>Details</button>
              </div>
            </div>
          </div>
    );
};

export default UsersCard;