import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const UserDetails = () => {
    const {id}=useParams();
    const location=useLocation();
    const user=location.state?.user;
    return (
        <div>
        <h2 className="font-semibold text-2xl">User Details</h2>
        <div className="mt-4">
            <h3>Name: {user.name}</h3>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <h4>Address:</h4>
            <p>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <h4>Company:</h4>
            <p>{user.company.name} - {user.company.catchPhrase}</p>
        </div>
    </div>
    );
};

export default UserDetails;