import React, { useEffect, useState } from "react";
import DisplayPartsInfo from "./DisplayPartsInfo";

const PartsInfo = ({load}) => {
  const [parts, setParts] = useState([]);

  const handleDeletePart =(id)=>{
    const proceed = window.confirm('Are you sure you would like to delete?');
    if(proceed){
        console.log('deleted', id);
        const url =`http://localhost:5000/parts/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.success){
                setParts(data.data)
            }
        })
    }
  
  }

  useEffect(() => {
    fetch("http://localhost:5000/parts")
      .then((response) => response.json())
      .then((data) => {
        setParts(data);
      })
      .catch((error) => {
        // Handle error
      });
  }, [load]);

  return (
    <div>
      <DisplayPartsInfo parts={parts}
      handleDeletePart={handleDeletePart}
      ></DisplayPartsInfo>
    </div>
  );
};

export default PartsInfo;
