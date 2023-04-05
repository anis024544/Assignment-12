import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { CartContext } from "../../App";
import Payment from "./Payment";


const ConfirmPage = ({ load, setLoad }) => {
  
  const [user, loading, error] = useAuthState(auth);
  const [carts, setCarts] = useContext(CartContext);


console.log('user', user);


  // const nameRef = useRef(null);
  // const emailRef = useRef(null);
  // const addressRef = useRef(null);

  // const quantityRef = useRef(null);
  // const imageRef = useRef(null);
  // const availableRef = useRef(null);
  // const priceRef = useRef(null);

 

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
   
  

    
    const orderInfo = { name,email,address };
    
    
    console.log(name,email,address );

    fetch("http://localhost:5000/orderInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast("Product Added Successfully");
          // handleReset()
          form.reset();
          setLoad(!load);
        } else {
          toast.error("Something went wrong. Please try again");
        }
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
   <>
   
  <div className="my-5 pt-5">
  <h1>Please Provide the following information</h1>
  <div className="flex justify-center items-center">
         
         <div className="modal-box flex justify-center items-center ">
           {/* <form onSubmit={handleSubmit}>
          <input type="text" ref={nameRef} placeholder="Name" className="input input-bordered mt-3 input-md w-full max-w-xs" />
         <input type="text" ref={imageRef}  placeholder="image" className="input input-bordered mt-3 input-md w-full max-w-xs" />
         <input type="text" ref={quantityRef}  placeholder="Quantity" className="input input-bordered mt-3 input-md w-full max-w-xs" />
         <input type="text" ref={availableRef}  placeholder="available" className="input input-bordered mt-3 input-md w-full max-w-xs" />
         <input type="text" ref={priceRef}  placeholder="Price" className="input input-bordered mt-3 input-md w-full max-w-xs" />
         <br></br>
         <button className="btn btn-md input-md w-full max-w-xs mt-3">Submit</button>
           
          </form> */}
            
           <div className="form-control w-full max-w-xs flex justify-center items-center">
            {/* <form onSubmit={handleSubmit}> */}
            {/* <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input
               type="text"
              name="name"
              defaultValue={user?.displayName}
               placeholder="Name"
               className="input input-bordered w-full "
             /> */}
          
           
            <div className="ml-10"> <Payment/></div>
         {/* <Link to='/payment'> <button className="btn btn-md input-md w-full max-w-xs mt-3">Submit</button></Link> */}

            {/* </form> */}
           </div>
        
       </div>
     </div>
  </div>
   </>
     
  );
};

export default ConfirmPage;
