import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../../App";
import PurchasedParts from "./PurchasedParts";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";


const PurchasePage = () => {
  const [carts, setCarts] = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

 const totalPrice = carts.reduce((acc, cart) => acc + cart.selectedQnt * cart.price, 0);




  const handleQuantity = (index) => {
    const newCarts = [...carts];

    if (!newCarts[index].selectedQnt) {
      newCarts[index].selectedQnt = 1;
    } 
    else  {
      newCarts[index].selectedQnt++;
    }
   
    setCarts(newCarts);
  };

  const handleQuantityDecrease=(index)=>{
    const newCarts = [...carts];
    if (!newCarts[index].selectedQnt) {
      newCarts[index].selectedQnt = 1;
    } 
    else  {
      newCarts[index].selectedQnt--;
    }
   
    setCarts(newCarts);

  }


  

 
  return (
    <>
    <h1>{user.email}</h1>
      <h2 className="text-2xl mt-5">
        {carts.length <= 1
          ? `Please select one more ${carts.length}`
          : `Your Total Parts ${carts.length}`}
      </h2>
      <div className=" bg-slate-300">
        {carts.map((part, index) => (
          <PurchasedParts
            key={part._id}
            part={part}
            index={index}
            handleQuantity={handleQuantity}
            handleQuantityDecrease={handleQuantityDecrease}
            quantity={quantity}
          ></PurchasedParts>
        ))}
        {/* <div className='w-36 relative left-[940px] h-2 bg-slate-500'></div> */}
      </div>
      <div className="flex items-center font-bold relative bg-slate-300  h-10 w-full ">
        <h1 className="absolute text-xl  right-[433px]">Total</h1>
        <h1 className="absolute text-xl  right-[349px]">${totalPrice}</h1>
       <Link to='/payment'>
       <button  className="btn border-0 bg-green-500 btn-xs absolute right-[180px] bottom-2">
          Confirm Your Order
        </button>
       </Link>
      </div>
    </>
  );
};

export default PurchasePage;
