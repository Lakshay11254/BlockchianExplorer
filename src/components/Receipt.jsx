// Receipt.jsx
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";

const Receipt = ({
  transactionHash,
  blockHash,
  blockNumber,
  from,
  to,
  amount,
  gasUsed,
}) => {
  return (
    <div className="p-4 mb-4 text-sm text-white-800 rouned-lg bg-red-50 dark:bg-gray-800 dark:text-white-400" role="alert">
      <h2 className="flex items-center gap-1"><FaReceipt />Receipt Details</h2>
      {transactionHash &&
      blockHash &&
      blockNumber &&
      from &&
      to &&
      amount &&
      gasUsed ? (
        <table>
          <tbody>
            <tr>
              <td>Transaction Hash:</td>
              <td>{transactionHash}</td>
            </tr>
            <tr>
              <td>Block Hash:</td>
              <td>{blockHash}</td>
            </tr>
            <tr>
              <td>Block Number:</td>
              <td>{blockNumber}</td>
            </tr>
            <tr>
              <td>From Address:</td>
              <td>{from}</td>
            </tr>
            <tr>
              <td>To Address:</td>
              <td>{to}</td>
            </tr>
            <tr>
              <td>Amount:</td>
              <td>{amount}</td>
            </tr>
            <tr>
              <td>Gas Used:</td>
              <td>{gasUsed}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="flex items-center  p-4 mb-4 gap-2 text-sm text-red-800 rouned-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <FaInfoCircle />Required transfer fields are missing.</p>
      )}
    </div>
  );
};

export default Receipt;
