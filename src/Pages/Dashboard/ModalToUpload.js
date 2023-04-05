import React, { useRef } from "react";

import { toast } from "react-toastify";

const ModalToUpload = ({load, setLoad}) => {



const nameRef = useRef(null);
const quantityRef = useRef(null);
const imageRef = useRef(null);
const availableRef = useRef(null);
const priceRef = useRef(null)

const handleReset = ()=>{
    nameRef.current.value='';
    quantityRef.current.value='';
    imageRef.current.value='';
    availableRef.current.value='';
    priceRef.current.value='';
}

const handleSubmit=(event)=>{
    event.preventDefault();
    const name = nameRef.current.value;
    const quantity =quantityRef.current.value;
    const image = imageRef.current.value;
    const available = availableRef.current.value;
    const price = priceRef.current.value;

  
    

 const products={name, quantity,image,available, price };

 fetch("http://localhost:5000/parts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(products)
})
.then(res=>res.json())
.then(data=>{
    if(data.success){
        toast("Product Added Successfully")
        // handleReset()
        setLoad(!load)
    }
    else{
        toast.error('Something went wrong. Please try again')
    }
})
.catch(error => {
  // Handle error
});

}



  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-7" className="btn btn-accent btn-sm">
        upload
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="my-modal-7" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

         
         <form onSubmit={handleSubmit}>
         <input type="text" ref={nameRef} placeholder="Name" className="input input-bordered mt-3 input-md w-full max-w-xs" />
        <input type="text" ref={imageRef}  placeholder="image" className="input input-bordered mt-3 input-md w-full max-w-xs" />
        <input type="text" ref={quantityRef}  placeholder="Quantity" className="input input-bordered mt-3 input-md w-full max-w-xs" />
        <input type="text" ref={availableRef}  placeholder="available" className="input input-bordered mt-3 input-md w-full max-w-xs" />
        <input type="text" ref={priceRef}  placeholder="Price" className="input input-bordered mt-3 input-md w-full max-w-xs" />
        <br></br>
        <button className="btn btn-md input-md w-full max-w-xs mt-3">Submit</button>
          
         </form>
         
        </div> 
      </div>
    </div>
  );
};

export default ModalToUpload;
