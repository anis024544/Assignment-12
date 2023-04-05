import React, { useEffect } from "react";
import OrderListTable from "./OrderListTable";
import { useState } from "react";
import { toast } from "react-toastify";


const OrderList = () => {
  const [orderList, setOrderList] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/orderInfo")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setOrderList(data));
  }, []);

  const updateOrderStatus = (status, productKey) => {
    console.log(status, productKey);
    // const updatedOrders = [];
    // orderList.map((order) => {
    //   if (order._id === productKey) {
    //     order.status = status;
    //   }
    //   updatedOrders.push(order);
    //   setOrderList(updatedOrders);
    // });
    let statusUpdatingInfo = {
      id: productKey,
      status: status,
    };
    fetch(`http://localhost:5000/updatedStatus/${productKey}`, {
      method: "PATCH",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(statusUpdatingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result.success) {
          setOrderList(data.result.data);
          toast.success(data.result.message);
   
        } else {
          toast.error('something went wrong');
         
        }
      });
  };

  return (
    <div className="flex flex-row">
      <div className="w-full">
        <div className="p-4 pr-5 bg-green-100">
          <h5 className="text-green-500 font-bold">All Orders</h5>
          <div>
            {
              <OrderListTable
                orders={orderList}
                updateOrderStatus={updateOrderStatus}
              ></OrderListTable>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

//-----------------------------------------------------------------------
//-------------------------------------------------------------------------
// import React, { useEffect, useState } from "react";
// import OrderListTable from "./OrderListTable";


// const OrderList = () => {
//   const [orderList, setOrderList] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/orderInfo")
//       .then((res) => res.json())
//       .then((data) => setOrderList(data));
//     console.log("working", orderList);
//   }, []);

//   const updateOrderStatus = (status, productKey) => {
//     let updatedStatusInfo = {
//       id: productKey,
//       status: status,
//     };

//     fetch(`http://localhost:5000/updateOrder/${productKey}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },

//       body: JSON.stringify(updatedStatusInfo)
//     })
//     .then(res=>res.json())
//     .then((data)=>{
//         setOrderList(data.result)
//     })
//   };

//   return (
//     <div>
//       <OrderListTable
//         updateOrderStatus={updateOrderStatus}
//         orders={orderList}
//       />
//     </div>
//   );
// };

// export default OrderList;
