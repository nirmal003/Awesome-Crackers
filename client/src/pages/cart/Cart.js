import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./cart.css";

import * as helpers from "../../Helper/helper";
import { deleteCart, updateCart } from "../../components/product/cartSlice";
import ModelView from "../model/ModelView";

function Cart() {
  const [imgUrl, setImgUrl] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartProduct = useSelector((state) => state.cart.cart);
  console.log(cartProduct);

  const netTotal = cartProduct.length && helpers.netTotal(cartProduct);

  const totalDiscount =
    cartProduct.length && helpers.overallDiscount(cartProduct);

  const totalPrice = cartProduct.length && helpers.overallPrice(cartProduct);

  const deleteProduct = (id) => {
    dispatch(deleteCart(id));
  };

  const handleCartInput = (qty, c) => {
    const discountPrice =
      (c.product.u.Discount_Percentage / 100) * c.product.u.Product_Price;

    const data = {
      id: c.id,
      qty: qty.length ? qty : 0,
      product: c.product,
      offerPrice: c.offerPrice,
      totalPrice: qty * c.offerPrice,
      discountPrice: qty * discountPrice,
    };

    dispatch(updateCart(data));

    // if (Number(qty) === 0) {
    //   if (window.confirm("do you want to cancel this item?....")) {
    //     dispatch(deleteCart(c.id));
    //     return;
    //   } else {
    //     dispatch(updateCart(data));
    //   }
    // } else {
    //   dispatch(updateCart(data));
    // }
  };

  const getImgUrl = (url) => {
    setImgUrl(url);
    setShow(!show);
  };

  return (
    <>
      <div className="cart_list_con">
        <div className="cart_goback_btn" onClick={() => navigate(-1)}>
          <IoMdCloseCircle />
        </div>
        <div className="cart">
          <div className="w-100 cart_head_con ">
            <h3 className="fw-bold acme m-2 ">Awesome Crackers </h3>
            <span className="fs-6  mx-5 text-center">
              4/480, Veerachelliya Puram, Sivakasi, Virudhunagar - 626 005
            </span>
            <span className="fs-6 ">Mobile No : 98947 40650</span>
          </div>

          <div className="scoop_parent">
            {cartProduct.length > 0 &&
              cartProduct.map((c) => (
                <div className="scoop scoop1" key={c.id}>
                  <div className="cart_img_con scoop1_child col-6">
                    <img
                      className="col-5"
                      loading="lazy"
                      src={c.product.u.Image}
                      alt={c.id}
                      onClick={() => getImgUrl(c.product.u.Image)}
                    />
                    <span className="text-start col-7">
                      {c.product.u.Product_Name}
                    </span>
                  </div>

                  <div className="cart_input_con scoop1_child py-1 col-3">
                    <input
                      type="number"
                      defaultValue={c.qty}
                      placeholder="Qty"
                      min="0"
                      className="input text-center"
                      onChange={(e) => handleCartInput(e.target.value, c)}
                    />

                    <span>₹ {Math.round(c.offerPrice)}.00</span>
                  </div>

                  <div className="cart_cancel_con scoop1_child col-3">
                    <span>₹ {Math.round(c.totalPrice)}</span>
                    <span
                      className="cart_cancel_icon "
                      onClick={() => deleteProduct(c.id)}
                    >
                      <IoMdCloseCircle />
                    </span>
                  </div>
                </div>
              ))}

            <div className="scoop scoop2">
              <span>Net Total</span>
              <span className="scoop2_amnt">₹ {Math.round(netTotal)}.00</span>
            </div>

            <div className="scoop scoop2">
              <span>Discount Total</span>
              <span className="scoop2_amnt">
                ₹ {Math.round(totalDiscount)}.00
              </span>
            </div>

            <div className="scoop scoop2">
              <span>Sub Total</span>
              <span className="scoop2_amnt">₹ {Math.round(totalPrice)}.00</span>
            </div>
          </div>

          <Link
            to={totalPrice ? "/estimate" : "/cart"}
            className="text-decoration-none text-black"
          >
            <button className="fs-5 estimate_btn_con">Confirm Estimate</button>
          </Link>
        </div>
      </div>

      {show && <ModelView imgUrl={imgUrl} show={() => setShow(!show)} />}
    </>
  );
}

export default Cart;
