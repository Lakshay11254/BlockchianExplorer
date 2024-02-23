import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { GiOnTarget } from "react-icons/gi";

const BlockDetails = ({ address, balance, gasUsed }) => {
  return (
    <div className="container mx-auto my-5 p-7 bg-purple-600 text-white rounded-lg shadow-xl">
      <h1 className="flex items-center gap-2 font-semibold text-2xl mb-4 ">
        <FaInfoCircle />
        Block Details
      </h1>
      {address ? (
        <table className="w-full border-collapse border border-purple-900">
          <thead>
            <tr className="bg-purple-800 text-white font-bold">
              <th className="border border-purple-900 py-2 px-4">Address</th>
              <th className="border border-purple-900 py-2 px-4">Balance</th>
              <th className="border border-purple-900 py-2 px-4">Gas Used</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center font-semibold">
              <td className="border border-purple-900 py-2 px-4">{address}</td>
              <td className="border border-purple-900 py-2 px-4">{balance}</td>
              <td className="border border-purple-900 py-2 px-4">{gasUsed}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="font-semibold text-black-600">
          Ethereum Address required.
        </p>
      )}
    </div>
  );
};

const Blocks = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [ethereumBlocks] = useState([
    {
      address: "0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e",
      balance: 542,
      gasUsed: 3051,
    },
    {
      address: "0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
      balance: 690,
      gasUsed: 4665,
    },
    {
      address: "0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba",
      balance: 654,
      gasUsed: 2232,
    },
    {
      address: "0xccf98fbf8c9ba7c7b0001efd1cf4fa1369a36f1b",
      balance: 304,
      gasUsed: 1232,
    },
    {
      address: "0xcefd1cf4fa1369a36f1bcf98f7c7b0001bf8c9ba",
      balance: 421,
      gasUsed: 1132,
    },
  ]);
  console.log(ethereumBlocks);

  const ethereumAddresses = [
    "0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e",
    "0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
    "0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba",
    "0xccf98fbf8c9ba7c7b0001efd1cf4fa1369a36f1b",
    "0xcefd1cf4fa1369a36f1bcf98f7c7b0001bf8c9ba",
  ];

  const handleOnChange = (e) => {
    const selectedAddress = e.target.value;
    setSelectedAddress(selectedAddress);
    // console.log(SelectedAddress);
  };

  const selectedBlock = ethereumBlocks.find(
    (block) => block.address === selectedAddress
  );

  return (
    <div className="bg-purple-600 min-h-screen text-white">
      <div className="container mx-auto p-8">
        <div className="mb-6">
          <label
            htmlFor="ethereumAddress"
            className="flex items-center font-bold mb-2 text-xl gap-2 text-white "
          >
            <GiOnTarget />
            Select Ethereum Address
            <GiOnTarget />
          </label>
          <select
            id="ethereumAddress"
            name="ethereumAddress"
            onChange={handleOnChange}
            value={selectedAddress || ""}
            className="w-full p-3 border rounded-md focus:outline-none focus:border-purple-700 bg-white text-black"
          >
            <option value="" disabled>
              Select an address
            </option>
            {
            ethereumAddresses.map((address) => (
              <option key={address} value={address}>
                {address}
              </option>
            ))}
          </select>
        </div>
        <BlockDetails {...selectedBlock} />
      </div>
    </div>
  );
};

export default Blocks;
