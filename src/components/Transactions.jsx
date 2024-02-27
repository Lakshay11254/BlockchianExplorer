import React from "react";


const Transactions = () => {
  const ethereumTransactions = [
    {
      source: "0xdd2d4581271023036023019337d5c02",
      destination: "0x0626169402b20030fb4c402012201100",
      amount: 260,
      status: "SUCCESS",
    },
    {
      source: "0x0626169402b20030fb4c402012201100",
      destination: "0xdd2d4581271023036023019337d5c02",
      amount: 120,
      status: "SUCCESS",
    },
    {
      source: "0xad2d4582241023036023019337d5c01",
      destination: "0x0226169401b20030fb4c402012201100",
      amount: 110,
      status: "FAILED",
    },
    {
      source: "0xgd2d2581271023036023019327d5c04",
      destination: "0x9626169402b20031fb4c402012301101",
      amount: 160,
      status: "SUCCESS",
    },
    {
      source: "0xdd2d4581271023036023019337d5c02",
      destination: "0x0626169402b20030fb4c402012201100",
      amount: 100,
      status: "FAILED",
    },
    {
      source: "0xgd2d4581271023036023019337d5c33",
      destination: "0x2626169402b20030fb4c402012201111",
      amount: 320,
      status: "SUCCESS",
    },
    // Add more transactions as needed
  ];

  return (
    <div className="bg-gray-600 min-h-screen text-white container mx-auto mt-8 my-5 p-7">
      <div className="container mx-auto p-8">
        {/* <Navbar title="Transaction History" /> */}
        {ethereumTransactions.map((transaction, index) => (
          <div key={index} className="transaction-item bg-gray-600 border border-white p-4 my-4 rounded-md shadow-md">
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
