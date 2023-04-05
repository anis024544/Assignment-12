import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const NotificationBadge = ({carts}) => {
    return (
      <>
      
     <div className='list-none -translate-x-[20px] translate-y-[18px] ]'>
     <li>
        <Link to="/purchase" className="text-4xl text-white font-bold"><GiShoppingCart /></Link>
        
      </li>
      <Link to="/purchase"><div className="w-6 h-6 bg-green-500 rounded-full translate-x-[15px] -translate-y-[40px] flex justify-center items-center"><small className='text-white '>{carts.length}</small></div></Link>

     </div>
      </>
    );
};

export default NotificationBadge;