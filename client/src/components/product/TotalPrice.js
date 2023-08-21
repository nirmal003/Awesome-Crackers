import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart, updateCart } from "./cartSlice";

function TotalPrice(u) {
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.cart);
  // console.log(cartProduct);

  const duplicate =
    cartProduct.length && cartProduct.filter((p) => p.id === u.u.Product_id);

  const handleInput = (qty, p) => {
    const id = p.u.Product_id;
    const discountPrice = (p.u.Discount_Percentage / 100) * p.u.Product_Price;
    const offerPrice = p.u.Product_Price - discountPrice;
    setTotalPrice(qty * offerPrice);

    const data = {
      id,
      qty,
      product: p,
      offerPrice,
      discountPrice: qty * discountPrice,
      totalPrice: qty * offerPrice,
    };

    if (Number(qty) === 0) {
      dispatch(deleteCart(id));
      return;
    }

    if (cartProduct.length === 0) {
      dispatch(addCart(data));
    } else {
      const duplicate = cartProduct.filter((p) => p.id === id);
      if (duplicate.length) {
        dispatch(updateCart(data));
      } else {
        dispatch(addCart(data));
      }
      // } else {
      //   if (qty.length === 0) {
      //     dispatch(deleteCart(id));
      //   } else if (duplicate.length) {
      //     dispatch(updateCart(data));
      //   } else {
      //     dispatch(addCart(data));
      //   }
      // }
    }
  };

  return (
    <>
      {duplicate[0]?.id === u.u.Product_id ? (
        <>
          <input
            type="number"
            className="input text-center mx-4"
            min="0"
            placeholder="Qty"
            defaultValue={duplicate[0].qty}
            onChange={(e) => handleInput(e.target.value, u)}
          />
          <span className="tot_price text-center">
            ₹ {Math.round(duplicate[0].totalPrice)}
          </span>
        </>
      ) : (
        <>
          <input
            type="number"
            className="input text-center mx-4"
            min="0"
            placeholder="Qty"
            onChange={(e) => handleInput(e.target.value, u)}
          />
          <span className="tot_price text-center">
            ₹ {Math.round(totalPrice)}
          </span>
        </>
      )}
    </>
  );
}

export default TotalPrice;
