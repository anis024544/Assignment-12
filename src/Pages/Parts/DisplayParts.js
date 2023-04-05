import React, { useState } from 'react';
const DisplayParts = ({part,handleAddToCart,index,indexes}) => {
  
 
  const {_id,name, image, quantity, available, price}=part

    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-48"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <h2 className='text-xl uppercase'>Available: {quantity}</h2>
        <p className='text-xl uppercase'>Price: {price}</p>
        <div className="card-actions">
         {<button className="btn w-48 btn-accent"onClick={()=>handleAddToCart(part,index)} disabled={quantity===0}>{indexes.includes(index)?"Added to cart":'Buy Now'}</button>}
        </div>
      </div>
    </div>
    );
};

export default DisplayParts;