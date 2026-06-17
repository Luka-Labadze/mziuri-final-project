import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCartWishlist } from "../context/CartWishlistContext";
import { useCartModal } from "../context/AddToCartModalContext";

function ProductTable({ mode = "cart" }) {
  const { t } = useTranslation();
  const { cart, wishlist, removeFromCart, removeFromWishlist, addToCart } =
    useCartWishlist();
  const { openAddToCartModal } = useCartModal();

  const items = mode === "cart" ? cart : wishlist;
  const handleRemove = mode === "cart" ? removeFromCart : removeFromWishlist;
  const subtotal = items.reduce((sum, item) => sum + Number(item.price), 0);

  if (!items.length) {
    return (
      <div className="EmptyCart">
        <h2 className="SC">
          {mode === "cart" ? t("Shopping Cart") : t("Wishlist")}
        </h2>
        <h3 className="CartIsEmpty">
          {mode === "cart"
            ? t("Your cart is currently empty.")
            : t("Your wishlist is currently empty.")}
        </h3>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <p className="CBH">{t("Continue browsing here")}</p>
        </Link>
      </div>
    );
  }

  return (
    <section className="productTable">
      <div className="tableWrapper">
        <ul className="tableHeader">
          <li className="headerCell">{t("Image")}</li>
          <li className="headerCell">{t("Product")}</li>
          <li className="headerCell">{t("Price")}</li>
          {mode === "cart" ? (
            <>
              <li className="headerCell">{t("Quantity")}</li>
              <li className="headerCell">{t("Total")}</li>
            </>
          ) : (
            <li className="headerCell">{t("Add to Cart")}</li>
          )}
          <li className="headerCell">{t("Remove")}</li>
        </ul>

        <ul className="productList">
          {items.map((item) => (
            <li key={item._id} className="productRow">
              <div className="imageCell">
                <img
                  src={item.image1}
                  alt={item.title}
                  className="productImage"
                />
              </div>

              <div className="infoCell">
                <span className="productName">{item.title}</span>
              </div>

              <div className="priceCell">${item.price}</div>

              {mode === "cart" ? (
                <>
                  <div className="quantityCell">
                    <div className="qtyControl">
                      <button className="qtyBtn">−</button>
                      <span className="qtyValue">1</span>
                      <button className="qtyBtn">+</button>
                    </div>
                  </div>
                  <div className="totalCell">${item.price}</div>
                </>
              ) : (
                <div className="addToCartCell">
                  <button
                    className="AddToCartBtn"
                    onClick={() => {
                      addToCart(item);
                      openAddToCartModal(item._id);
                    }}
                  >
                    {t("Add to Cart")}
                  </button>
                </div>
              )}

              <div className="removeCell">
                <button
                  className="removeBtn"
                  onClick={() => handleRemove(item._id)}
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {mode === "cart" && (
        <div className="cartFooter">
          <div className="cartActions">
            <button className="cartActionBtn">{t("Update Cart")}</button>
            <Link to="/products">
              <button className="cartActionBtn">
                {t("Continue Shopping")}
              </button>
            </Link>
          </div>
          <div className="cartTotals">
            <h3 className="cartTotalsTitle">{t("Cart Totals")}</h3>
            <div className="totalsRow">
              <span className="totalsLabel">{t("Subtotal")}</span>
              <span className="totalsValue">${subtotal.toFixed(2)}</span>
            </div>
            <div className="totalsRow totalBold">
              <span className="totalsLabel">{t("Total")}</span>
              <span className="totalsValue">${subtotal.toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <button className="checkoutBtn">
                {t("Proceed to Checkout")}
              </button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductTable;
