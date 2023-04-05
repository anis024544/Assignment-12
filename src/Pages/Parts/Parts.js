import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../App";
import DisplayParts from "./DisplayParts";


const Parts = () => {
  const [parts, setParts] = useState([]);
  
  const [carts, setCarts] = useContext(CartContext);

  const [indexes, setIndexes]=useState([])
  
  const handleAddToCart = (selectedPart, index) => {
    const exists= carts.find(part=>part._id===selectedPart._id)

    //find method return undefined if it does not find the element it is looking for in the array
    // filter method return an empty array if it does not find th element it is looking for in the array or object
    
    // console.log(exists);
    if(exists){
      return
    }
    else{
      selectedPart.selectedQnt=1
      setCarts([...carts,selectedPart])
    }
      
    
   
    setIndexes([...indexes,index])
   
    // const partsIndex = parts.findIndex((part) => part._id === selectedPart._id);
   
    // if (partsIndex !== -1) {
    //   // update the quantity of the part
    //   const updatedParts = [...parts];
    //   if (updatedParts[partsIndex].quantity > 0) {
    //     updatedParts[partsIndex].quantity = updatedParts[partsIndex].quantity -1;
    //     // updatedParts[partsIndex].quantity -= 1;
    //     setParts(updatedParts);
    //   }
    // }
  };

  useEffect(() => {
    fetch("http://localhost:5000/parts")
      .then((response) => response.json())
      .then((data) => {
        setParts(data);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  return (
    <div>
      
      <div className="grid grid-cols-3">
        {parts.map((part, index) => (
          <DisplayParts
            key={part._id}
            index={index}
            indexes={indexes}
            part={part}
            handleAddToCart={handleAddToCart}
          
          ></DisplayParts>
        ))}
      </div>
    </div>
  );
};

export default Parts;
