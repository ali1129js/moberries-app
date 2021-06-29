/*
-Functional component
-Select input
-Sends amount's value to SelectPlan
*/
import React from "react";

const Amount = ({ handleAmount }) => {
  let value;
  return (
    <div className="amnt">
      Amount:
      <select
        style={{ width: "10rem", display: "inline" }}
        className="form-select m-3"
        value={value}
        onChange={(e) => handleAmount(e.target.value)}
      >
        <option value="5">5 GigaBytes</option>
        <option value="10">10 GigaBytes </option>
        <option value="50">50 GigaBytes</option>
      </select>
    </div>
  );
};
export default Amount;
