/*
-Functional component
- Select input
- sends duration's value to SelectPlan
*/

import React from "react";

const Duration = ({ handleDuration }) => {
  let value;
  return (
    <div className="drtn">
      Duration:
      <select
        style={{ width: "10rem", display: "inline" }}
        className="form-select m-3"
        value={value}
        onChange={(e) => handleDuration(e.target.value)}
      >
        <option value="12">12 Months</option>
        <option value="6">6 Months </option>
        <option value="3">3 Months</option>
      </select>
    </div>
  );
};

export default Duration;
