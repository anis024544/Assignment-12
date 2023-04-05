import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AiFillFolder,GrUserAdmin } from "react-icons/ai";
const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <h2 className="text-2xl font-bold text-purple-600"> Welcome to your Dashboard</h2> */}
        {/* Page content here  */}
        <Outlet></Outlet>

      </div>
      <div className="drawer-side z-0">
      <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-48 bg-base-100 text-base-content font-bold">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Booked User</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/history">My History</Link>
          </li>
          <li>
            <Link to="/dashboard/addParts">Add Parts</Link>
          </li>
          <li>
            <Link to="/dashboard/users">All Users</Link>
          </li>
          <li>
            <Link to="/dashboard/orderList" ><AiFillFolder className="text-[#E49B0F]" /> Order List</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
