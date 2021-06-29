const CurrentSubs = ({ duration, amount, total }) => {
  return (
    <div className="current">
      <div className="h3">Current Subscription:</div>
      <strong>{amount} </strong>GigaBytes for <strong> {duration}</strong>
      Months <br />
      <div className="h3 text-danger"> Cost:{total}$</div>
    </div>
  );
};
export default CurrentSubs;
