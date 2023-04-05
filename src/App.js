import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";

import Footer from "./Pages/Shared/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import BookedInfo from "./Pages/Dashboard/BookedInfo";
import MyHistory from "./Pages/Dashboard/MyHistory";
import MyReview from "./Pages/Dashboard/MyReview";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import AddParts from "./Pages/Dashboard/AddParts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Pages/Login/RequireAuth";
import Users from "./Pages/Dashboard/Users";
import PurchasePage from "./Pages/Parts/PurchasePage";
import { createContext, useState } from "react";
import Payment from "./Pages/Payment/Payment";
import ConfirmPage from "./Pages/Payment/ConfirmPage";
import OrderList from "./Pages/Dashboard/OrderList";




export const CartContext = createContext();

function App() {
  
  const [carts, setCarts] = useState([]);
 
 
  return (
    <CartContext.Provider value={[carts, setCarts,]}>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/confirmPage" element={<ConfirmPage />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/purchase" element={<RequireAuth><PurchasePage /></RequireAuth>} />
    
          {/* 
          Dashboard start here */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route index element={<BookedInfo></BookedInfo>}></Route>
            <Route path="history" element={<MyHistory></MyHistory>}></Route>
            <Route path="review" element={<MyReview></MyReview>}></Route>
            <Route path="addParts" element={<AddParts />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="orderList" element={<OrderList />}></Route>
          </Route>
          {/* 
          Dashboard ends here */}
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </div>
    </CartContext.Provider>
  );
}

export default App;
