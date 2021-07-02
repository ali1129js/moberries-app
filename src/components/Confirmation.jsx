import React from 'react'


const Confirmation = ({ handleNext }) => {
  return (
    <div className="confirm">
      Summary of the selected subscription including total price and price per
      GB. Email of the user Terms and conditions agreement checkbox Confirmation
      button
      <button
        type="button"
        className="btn btn-outline-info btn-lg"
        onClick={handleNext}
      >
        Back
      </button>
    </div>
  );
};
export default Confirmation;
