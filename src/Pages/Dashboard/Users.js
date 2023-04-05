import React, { useState } from 'react';


const Users = () => {

    const [users, setUsers]= useState([]);
     
    fetch('http://localhost:5000/user')
    .then(res=>res.json()
    .then(data=>setUsers(data)))
     
    return (
        <div>
            <h2 className='text-2xl'>All Users {users.length}</h2>
        </div>
    );
};

export default Users;