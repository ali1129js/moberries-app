import React, { useState } from "react";

const Confirmation = ({ handleNext, confirmation }) => {
  const [checked, setChecked] = useState(false);
  const [submited, setSubmited] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = confirmation;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("https://httpbin.org/post", requestOptions)
      .then((response) => response.json())
      .then(setSubmited(!submited));
  };

  return (
    <div className="container-sm">
      <div className="confirm">
        <div className="sum">
          <div>
            You have selected the {confirmation.amount} GigaBytes for{" "}
            {confirmation.duration} Months plan
          </div>
          <div> Total cost: {confirmation.total}$</div>
          Please Check your email and Credit information.
          <div className="email">{confirmation.ccData.email}</div>
          <div className="ccdata"> {confirmation.ccData.cardNum}</div>
          <label>
            <input type="checkbox" checked={checked} onChange={handleChange} />{" "}
            I agree to Terms and conditions
          </label>
        </div>
        <button
          type="button"
          className="btn btn-outline-info btn-lg"
          onClick={handleNext}
        >
          Back
        </button>

        <input
          type="submit"
          className="btn btn-info btn-lg m-2"
          value="Submit"
          onClick={handleSubmit}
          disabled={!checked}
        />
        <div className="text">
          {submited ? (
            <div className="text text-success">
              <p className="fw-bold">Success!</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
