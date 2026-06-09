import "react";
import { Link } from "react-router-dom";
function OnSaleGrid({ product }) {
  return (
    <div className="onSaleGrid">
      <Link to="/products">
        <img src={product.image1} alt={1234} className="onSaleGridImg" />
      </Link>
      <div className="onSaleGridInfo">
        <h4 className="onSaleGridTitle">{product.title}</h4>
        <p className="onSaleGridPrice">${product.price}</p>
      </div>
    </div>
  );
}

export default OnSaleGrid;
