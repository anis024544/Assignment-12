// import React from 'react';

// const OrderListTable = ({ order, updateOrderStatus }) => {
//     return (
//         // <div>
//         //     <table className="table table-borderless">
//         //         <thead>
//         //             <tr>
//         //                 <th className="text-secondary text-left" scope="col">Sr No</th>
//         //                 <th className="text-secondary " scope="col">Name</th>
//         //                 <th className="text-secondary " scope="col">Email</th>
//         //                 <th className="text-secondary" scope="col">ServiceName</th>

//         //                 <th className="text-secondary" scope="col">Pay with</th>
//         //                 <th className="text-secondary" scope="col">status</th>
//         //             </tr>
//         //         </thead>
//         //         <tbody>
//         //             {
//         //                 order.map((order, index) =>

//         //                     <tr>
//         //                         <td>{index + 1}</td>
//         //                         <td className="">{order.name}</td>
//         //                         <td className=" ">{order.email}</td>
//         //                         <td>{order.serviceName}</td>

//         //                         <td>Credit cart</td>
//         //                         <td>
//         //                             <select
//         //                                 className={order.status === "Pending" ? "btn btn-danger" : order.status === "Done" ? "btn btn-success" : "btn btn-info"}
//         //                                 defaultValue={order.status}
//         //                                 onChange={e => updateOrderStatus(e.target.value, order._id)}>
//         //                                 <option className="bg-white text-muted">Pending</option>
//         //                                 <option className="bg-white text-muted">On going</option>
//         //                                 <option className="bg-white text-muted">Done</option>
//         //                             </select>
//         //                         </td>

//         //                     </tr>
//         //                 )
//         //             }
//         //         </tbody>
//         //     </table>

//         // </div>
//         <div className="max-w-full flex justify-center items-center">
//   <table className="table-auto border-collapse ">
//     <thead>
//       <tr className="bg-green-200">
//         <th className="py-3 px-4 text-left text-red font-medium" scope="row">Sr No</th>
//         <th className="py-3 px-4 text-black font-medium" scope="row">Name</th>
//         <th className="py-3 px-4 text-black font-medium" scope="row">Email</th>
//         <th className="py-3 px-4 text-black font-medium" scope="row">ServiceName</th>
//         <th className="py-3 px-4 text-black font-medium" scope="row">Pay with</th>
//         <th className="py-3 px-4 text-black font-medium" scope="row">status</th>
//       </tr>
//     </thead>
//     <tbody>
//       {order.map((order, index) => (
//         <tr key={order._id} className="border-b border-gray-300">
//           <td className="py-3 px-4">{index + 1}</td>
//           <td className="py-3 px-4">{order.name}</td>
//           <td className="py-3 px-4">{order.email}</td>
//           <td className="py-3 px-4">{order.serviceName}</td>
//           <td className="py-3 px-4">Credit card</td>
//           <td className="py-3 px-4">
//             <select
//              className={`py-2 px-4 rounded-lg font-bold text-white ${order.status === "Pending"
//              ? "bg-red-500 hover:bg-red-700"
//              : order.status === "Done"
//              ? "bg-green-500 hover:bg-green-700"
//              : "bg-blue-500 hover:bg-blue-700"
//            }`}

//               defaultValue={order.status}
//               onChange={(e) => updateOrderStatus(e.target.value, order._id)}
//             >
//               <option className="bg-white text-black">Pending</option>
//               <option className="bg-white text-black">On going</option>
//               <option className="bg-white text-black">Done</option>
//             </select>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>

//     );
// };

// export default OrderListTable;
import React from "react";

const OrderListTable = ({orders,updateOrderStatus}) => {
    const red ="bg-red-500 hover:bg-red-700"
    const green = "bg-green-500 hover:bg-green-700"
    const blue = "bg-blue-500 hover:bg-blue-700"
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Pay With</th>
            <th>Service Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order, index)=><tr key={order._id}>
            <th>{index+1}</th>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>Credit Card</td>
            <td>{order.status}</td>
            <td>
              <select className={`select select-bordered w-32 max-w-xs text-white
              ${order.status==="Pending" ?red:order.status==="Done"?green: blue}`}
              defaultValue={orders.status}
              onChange={(e)=>updateOrderStatus(e.target.value, order._id)}
              >
                <option>
                  Pending
                </option>
                <option>On Going</option>
                <option>Done</option>
              </select>
            </td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default OrderListTable;
