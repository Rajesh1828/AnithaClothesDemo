import React, { useState } from "react";
import CartTotal from "../components/GetCartTotal/CartTotal";
import { SiRazorpay } from "react-icons/si";
import { FaStripe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {
  const [method, setMethod] = useState("COD");
  const navigate = useNavigate();


  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 px-6 sm:px-10 lg:px-20 py-10 min-h-screen">
      {/* ================= LEFT SIDE ================= */}
      <div className="flex-1  h-auto shadow-lg items-center justify-center  rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 uppercase">
          Delivery Information
        </h2>

        <form className="space-y-4 ">
          {/* First & Last Name */}
          <div className="flex gap-4 ">
            <input 
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
            <input 
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          <input 
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />

          <input 
            type="text"
            placeholder="Street Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          />

          <div className="flex gap-4">
            <input 
              type="text"
              placeholder="City"
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
            <input 
              type="text"
              placeholder="State"
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          <div className="flex gap-4">
            <input 
              type="number"
              placeholder="Zipcode"
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2  focus:ring-violet-500"
              required
            />
            <input 
              type="text"
              placeholder="Country"
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2  focus:ring-violet-500"
              required
            />
          </div>

          <input
            type="number"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2  focus:ring-violet-500"
          />
        </form>
      </div>
 
      {/* ================= RIGHT SIDE ================= */}
      <div className="flex flex-col flex-1 gap-8">
        {/* Cart Summary Card */}
 required
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <CartTotal />
        </div>

        {/* Payment Method */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase border-b pb-2">
            Payment Method
          </h2>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Razorpay */}
            <div
              onClick={() => setMethod("razorpay")}
              className={`flex items-center gap-3 border p-3 rounded-xl cursor-pointer transition-all ${
                method === "razorpay"
                  ? "border-violet-600 bg-violet-50 shadow-md"
                  : "hover:border-violet-400"
              }`}
            >
              <span
                className={`w-4 h-4 border rounded-full ${
                  method === "razorpay" ? "bg-violet-600" : ""
                }`}
              ></span>
              <SiRazorpay size={24} color="#7c3aed" />
              <p className="font-medium">Razorpay</p>
            </div>

            {/* Stripe */}
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-3 border p-3 rounded-xl cursor-pointer transition-all ${
                method === "stripe"
                  ? "border-blue-600 bg-blue-50 shadow-md"
                  : "hover:border-blue-400"
              }`}
            >
              <span
                className={`w-4 h-4 border rounded-full ${
                  method === "stripe" ? "bg-blue-600" : ""
                }`}
              ></span>
              <FaStripe size={24} color="#2563eb" />
              <p className="font-medium">Stripe</p>
            </div>

            {/* COD */}
            <div
              onClick={() => setMethod("COD")}
              className={`flex items-center gap-3 border p-3 rounded-xl cursor-pointer transition-all ${
                method === "COD"
                  ? "border-green-600 bg-green-50 shadow-md"
                  : "hover:border-green-400"
              }`}
            >
              <span
                className={`w-4 h-4 border rounded-full ${
                  method === "COD" ? "bg-green-600" : ""
                }`}
              ></span>
              <p className="font-medium text-gray-800">Cash on Delivery</p>
            </div>
          </div>
        </div>

        {/* Place Order Button */}
        <button onClick={()=>navigate('/orders')} className="w-full bg-violet-700 hover:bg-violet-800 text-white py-3 rounded-full font-semibold text-lg shadow-md transition-all">
          Place Order →
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
