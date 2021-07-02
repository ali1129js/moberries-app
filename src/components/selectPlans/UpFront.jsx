/*
-Functional component with hooks
-Radio input
-Sends true/false to SelectPlan
*/

import React, { useState, useEffect } from "react";

const UpFront = ({ handleUpFront }) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    handleUpFront(checked);
  }, [checked, handleUpFront]);
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label className="form-check-label">Pay Upfront and Save 10%</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          checked={!checked}
          onChange={() => setChecked(!checked)}
        />
        <label className="form-check-label">No Thanks</label>
      </div>
    </div>
  );
};
export default UpFront;
