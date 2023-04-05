import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { GiShoppingCart } from "react-icons/gi";
import NotificationBadge from "./NotificationBadge";
import { CartContext } from './../../App';
const Navbar = () => {

 const [carts, setCarts] = useContext(CartContext);

  const [user] = useAuthState(auth);


  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };


  const profileImg = <div>
      <img className=" w-11 h-11 rounded-full" src={user?.photoURL} alt="profile pic"  />
  </div>

  const menuItems = 
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="carParts">Car Parts</Link>
      </li>

      <li>
        <Link to="appointment">Reviews</Link>
      </li>
      <li>
        <Link to="appointment">Contact Us</Link>
      </li>

      <li>
        {user && <Link to="/dashboard">Dashboard</Link>}
      </li>
      <li>
      {user?<button onClick={logout} className="">Sign Out</button> :<Link to='/login'>Login</Link>}
      </li>
      <li>
         {user? profileImg:''}
      </li>
     
      <li className="translate-x-20">
        <Link to="/purchase" className="lg:text-4xl text-white font-bold"><GiShoppingCart /></Link>
        
      </li>
      <Link to="/purchase"><div className=" sm: hidden lg:flex justify-center items-center lg:w-6 h-6 bg-green-500 rounded-full translate-x-11 translate-y-[5px]"><small>{carts.length}</small></div></Link>
      
      
    </>
  ;

  return (
    <div className="navbar  uppercase  text-xl bg-gradient-to-t from-red-600 to-red-400  sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost text-white  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           
            {menuItems}
          </ul>
        </div>
        <Link
          to="appointment"
          className="btn btn-ghost normal-case text-xl text-white"
        >
          Japan Warehouse BD
        </Link>
      </div>
      <div className="navbar-center hidden text-white lg:flex mr-32">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      
      <div className="navbar-end  lg:hidden">
      <NotificationBadge carts={carts}/>
        <label
          tabIndex="1"
          htmlFor="dashboard-sidebar"
          className=" text-black lg:hidden"
        >
           
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
