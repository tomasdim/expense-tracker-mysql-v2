import React from "react";
import Operation from "../components/Operation";
import "../styles/Tracker.css";

const Tracker = ({ operations }) => {
  let sum = 0;
  return (
    <div className="tracker-container">
      <div className="welcome-message">
        <span>Hi, Username!</span>
        <button className="exit">Exit</button>
      </div>
      <div className="total-amount">$123</div>
      <div className="new-transaction-container">
        <div className="new-transaction">
          <form>
            <input
              placeholder="Transaction Name"
              type="text"
              name="transactionName"
            />
            <div className="input-container">
              <select name="type">
                <option value="0">Type</option>
                <option value="expense">Expense</option>
                <option value="earning">Earning</option>
              </select>
              <input placeholder="Price" type="text" name="price" />
            </div>
            <button className="add-transaction">+ Add Transaction</button>
          </form>
        </div>
      </div>
      <div className="transaction-history">
        <p>Transaction history</p>
        <ul>
          {operations.map((o) => (
            <Operation operation={o} />
          ))}
          <li>
            <div>Atm deposit</div>
            <div>+$5</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tracker;
