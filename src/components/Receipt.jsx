// Receipt.jsx
import React from "react";

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
    <div className="receipt">
      <h2>Receipt Details</h2>
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
        <p className="warning-message">Required transfer fields are missing.</p>
      )}
    </div>
  );
};

export default Receipt;
