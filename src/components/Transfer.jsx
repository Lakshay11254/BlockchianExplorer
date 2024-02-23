// Transfer.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import Receipt from "./Receipt";

const Transfer = () => {
  const ethereumAddresses = [
    "0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e",
    "0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
    "0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba",
  ];

  const [amount, setAmount] = useState("");
  const [selectedToAddress, setSelectedToAddress] = useState("");
  const [selectedFromAddress, setSelectedFromAddress] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded receipt object for demonstration
    const hardcodedReceipt = {
      transactionHash: "0x123abc",
      blockHash: "0x456def",
      blockNumber: 123,
      from: selectedFromAddress,
      to: selectedToAddress,
      amount: amount,
      gasUsed: 21000, // Sample gas used
    };

    setReceipt(hardcodedReceipt);
    setShowReceipt(true);
  };

  const handleCancel = () => {
    setAmount("");
    setSelectedToAddress("");
    setSelectedFromAddress("");
    setShowReceipt(false);
  };

  return (
    <div className="bg-gray-600 min-h-screen text-white container mx-auto my-5  p-10">
      <div className="container mx-auto p-8">
        {/* <Navbar title="Transfers" /> */}
        <form onSubmit={handleSubmit} className="mb-4">
          {/* Form inputs and address selection */}
          <label htmlFor="toAddress">To Address:</label>
          <select
            id="toAddress"
            name="toAddress"
            onChange={(e) => setSelectedToAddress(e.target.value)}
            value={selectedToAddress}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-gray-700 bg-white text-black"
          >
            <option value="" disabled>
              Select a To Address
            </option>
            {ethereumAddresses.map((address) => (
              <option key={address} value={address}>
                {address}
              </option>
            ))}
          </select>

          <label htmlFor="fromAddress">From Address:</label>
          <select
            id="fromAddress"
            name="fromAddress"
            onChange={(e) => setSelectedFromAddress(e.target.value)}
            value={selectedFromAddress}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-gray-700 bg-white text-black"
          >
            <option value="" disabled>
              Select a From Address
            </option>
            {ethereumAddresses.map((address) => (
              <option key={address} value={address}>
                {address}
              </option>
            ))}
          </select>

          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-gray-700 bg-white text-black"
          />


          {/* Submit and cancel buttons */}
          <button type="submit" className="mr-2 container bg-gray-900 hover:bg-gray-700 mt-2 mb-2 p-2">
            SUBMIT
          </button>
          <button type="button" className="container bg-gray-900 hover:bg-gray-700 p-2 " onClick={handleCancel} >
            CANCEL
          </button>
        </form>

        {/* Conditionally render Receipt component */}
        {showReceipt && receipt && <Receipt {...receipt} />}
      </div>
    </div>
  );
};

export default Transfer;
