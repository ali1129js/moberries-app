import React from "react";

const Confirmation = ({ handleNext, confirmation }) => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="container-sm">
      <div className="confirm">
        <div className="sum">
          <div>
            You have selected the {confirmation.amount} GigaBytes for{" "}
            {confirmation.duration} Months plan
          </div>
          <div> Total cost: {confirmation.total}</div>
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
          disabled={!checked}
        />
      </div>
    </div>
  );
};
export default Confirmation;
