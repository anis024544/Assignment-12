import React from "react";

const DisplayPartsInfo = ({ parts,handleDeletePart }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Payment</th>
          </tr>
        </thead>

        <tbody>
          {parts.map((part) => (
            <tr key={part._id}>
            
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={part.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{part.name}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                {part.price}
              </td>
              <td>{part.quantity}</td>
              <th>
                <button onClick={()=>handleDeletePart(part._id)} className="btn btn-accent btn-xs">Delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayPartsInfo;
