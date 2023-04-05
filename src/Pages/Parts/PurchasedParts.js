import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
const PurchasedParts = ({part,handleQuantity,handleQuantityDecrease,quantity,index}) => {
    const {name,price,selectedQnt, image}=part
    
  
    return (
      //   <div className="card lg:w-96 bg-base-100 shadow-xl">
      //   <figure className="px-10 pt-10">
      //     <img
      //       src={image}
      //       alt="#"
      //       className="rounded-xl w-48"
      //     />
      //   </figure>
      //   <div className="card-body items-center text-center">
      //     <h2 className="card-title">{name}</h2>
      //     <h2 className='text-xl uppercase'>Available: {quantity}</h2>
      //     <p className='text-xl uppercase'>Price: {price}</p>
      //     <div className="card-actions">
      //       <button onClick={handlePayment} className="btn w-48 btn-accent">Confirm your order</button>
      //     </div>
      //   </div>
      // </div>
      <>
      
      <div className='flex justify-center  items-center w-full py mt-5  bg-slate-200'>

        <div className="ml-5">Product Name</div>


        <div className='py-1'>
          <img className='w-20 h-20 rounded-full' src={image} alt="" />
        </div>



        <div className='mx-10'><h1>{name}</h1></div>
       
        

      <div className="flex justify-center items-center">
        <button onClick={()=>handleQuantityDecrease(index)} className="decrease-btn text-2xl"><AiOutlineMinusCircle/></button>
        <span className="px-1">{quantity<10? `0${selectedQnt||0}` : `${selectedQnt||0}`}</span>
        <button onClick={()=>handleQuantity(index,)} className="increase-btn text-2xl"><AiOutlinePlusCircle/></button>
      </div>


      <div className='mx-10'><h1>{price<=10? `$0${ +price}` : `$${price}`}</h1>
     
      </div>
      </div>
      
      </>
    );
};

export default PurchasedParts;