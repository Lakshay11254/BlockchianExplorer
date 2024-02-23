// Transactions.jsx
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import Navbar from "./Navbar";

const Transactions = () => {
  const ethereumTransactions = [
    {
      source: "0xdd2d4581271023036023019337d5c02",
      destination: "0x0626169402b20030fb4c402012201100",
      amount: 260,
      status: "SUCCESS",
    },
    // Add more transactions as needed
  ];

  return (
    <div className="bg-purple-600 min-h-screen text-white">
      <div className="container mx-auto p-8">
        <Navbar title="Transaction History" />
        {ethereumTransactions.map((transaction, index) => (
          <div key={index} className="transaction-item bg-purple-600 border border-white p-4 my-4 rounded-md shadow-md">
            <p>Source: {transaction.source}</p>
            <p>Destination: {transaction.destination}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Status: {transaction.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
