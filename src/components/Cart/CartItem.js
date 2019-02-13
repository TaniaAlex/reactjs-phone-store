import React from "react";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      {/* product img */}
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      {/* title */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product :</span> {title}
      </div>
      {/* price */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price :</span> ${price}
      </div>
      {/* buttons -count+ */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span className="btn btn-black mx-1" onClick={() => increment(id)}>
            +
          </span>
        </div>
      </div>
      {/* end buttons  */}

      {/* remove item */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>

      {/* total */}
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: ${total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
