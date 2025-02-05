import React, { useEffect, useState } from 'react';

const Allusers = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(error=>console.error(error))

    },[])
    return (
        <div>
            <h2>Users:{users.length}</h2>
            {
                users.map()
            }
        </div>
    );
};

export default Allusers;