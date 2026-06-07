import 'react'

function OnSaleGrid({product}) {
  return (
     <div className="onSaleGrid">
        <img src={product.image1} alt={1234} className="onSaleGridImg" />
      <div className="onSaleGridInfo">
        <h4 className="onSaleGridTitle">{product.title}</h4>
        <p className="onSaleGridPrice">${product.price}</p>
      </div>
    </div>
  )
}

export default OnSaleGrid