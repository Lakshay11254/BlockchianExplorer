import React from "react";
import { FaHistory } from "react-icons/fa";

const Transactions = () => {
  const ethereumTransactions = [
    {
      source: "0xdd2d4581271023036023019337d5c02",
      destination: "0x0626169402b20030fb4c402012201100",
      amount: 260,
      gasUsed: "21000",
      receiptHash: "0x32ad12313daa131r212111ew24444133",
      status: "SUCCESS",
    },
    {
      source: "0x0626169402b20030fb4c402012201100",
      destination: "0xdd2d4581271023036023019337d5c02",
      amount: 120,
      gasUsed: "21000",
      receiptHash: "0x82ad12313d2a131r212211ew24444122",
      status: "SUCCESS",
    },
    {
      source: "0xad2d4582241023036023019337d5c01",
      destination: "0x0226169401b20030fb4c402012201100",
      amount: 110,
      gasUsed: "21000",
      receiptHash: "0x62ad12313dag1312212111ew22244111",
      status: "FAILED",
    },
    {
      source: "0xgd2d2581271023036023019327d5c04",
      destination: "0x9626169402b20031fb4c402012301101",
      amount: 160,
      gasUsed: "21000",
      receiptHash: "0x72ad12313daa131r212111ew23444136",
      status: "SUCCESS",
    },
    {
      source: "0xdd2d4581271023036023019337d5c02",
      destination: "0x0626169402b20030fb4c402012201100",
      amount: 100,
      gasUsed: "21000",
      receiptHash: "0x02ad12313daa131r212111ew24444131",
      status: "FAILED",

    },
    {
      source: "0xgd2d4581271023036023019337d5c33",
      destination: "0x2626169402b20030fb4c402012201111",
      amount: 320,
      gasUsed: "21000",
      receiptHash: "0x12ad12311daa131r2121112w2444642",
      status: "SUCCESS",

    },
  ];

  return (
    <div className="bg-gray-600  text-white  mx-auto mt-8 my-5 p-7">
      <h1 className="flex items-center gap-2 font-semibold text-2xl mb-1 mt-8">
      <FaHistory />Transaction History
      </h1>
      <div className="container mx-auto min-h-screen p-8">
        {/* <Header title="Transaction History" /> */}
        {/* mapping */}
        {ethereumTransactions.map((transaction, index) => (
          <div key={index} className=" bg-gray-600 border border-white p-4 my-4 rounded-md shadow-md">
            <p>Source: {transaction.source}</p>
            <p>Destination: {transaction.destination}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Status: {transaction.status}</p>
            <p>Gas Used: {transaction.gasUseds}</p>
            <p>Receipt Hash: {transaction.receiptHash}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
