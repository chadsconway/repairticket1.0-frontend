const LaborLineItem = ({ laborLineItem }) => {
  return (
    <div className="laborLineItem" key={laborLineItem.laborId}>
      <p className="labor-description">{laborLineItem.laborDescription}</p>
      <p className="labor-time">{laborLineItem.laborTime} hrs</p>
      <p className="labor-subtotal">
        ${laborLineItem.laborSubtotal.toFixed(2)}
      </p>
    </div>
  );
};
export default LaborLineItem;
