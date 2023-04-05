import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
const BookedInfo = () => {
  const [user, loading, error] = useAuthState(auth);
 
  const [reload, setReload]=useState(false)

  const [users, setUsers]=useState([])
  

  useEffect(()=>{
    const url ='http://localhost:5000/user'
    fetch(url)
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[reload])

  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'PUT', 
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount>0){
        setReload(!reload)
      }
      // if(data.modifiedCount > 0){
        //     toast.success('Make admin successful.')
        //     refetch();
        // }
    })
}
  
  
    return (
        <div className="overflow-x-auto">
         
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Position</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      users.map((user,index)=> <tr key={user._id}>
        <th>{1+index}</th>
        <td>{user.email}</td>
        {/* <td><button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-sm">Make admin</button></td> */}
        <td>{ user.role === 'admin'? <button className='btn btn-xs btn-accent translate-x-2'>admin</button>  : <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
        {/* <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
        <td><button className="btn btn-sm">Remove admin</button></td>
      </tr>)
     }
      
    </tbody>
  </table>
</div>
    );
};

export default BookedInfo;