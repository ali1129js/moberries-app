import React from 'react'

const CurrentSubs = ({ duration, amount, total }) => {
  return (
    <div className="container-sm">
      <div className="current">
        <div className="h4 m-2">Current Subscription:</div>
        <div>
          <strong>{amount} </strong>GigaBytes for <strong> {duration}</strong>
          Months
        </div>
        <br />
        <div className="h3 text-danger m-2"> Cost:{total}$</div>
      </div>
    </div>
  );
};
export default CurrentSubs;
