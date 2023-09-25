import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { ImSpinner3 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import * as helpers from "../../Helper/helper";
import { addData } from "../home/dataSlice";
import TotalPrice from "./TotalPrice";
import { deleteCart } from "./cartSlice";
import "./product.css";

function Product() {
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(process.env.REACT_APP_KEY);
      const jsonData = await data.json();
      dispatch(addData(jsonData));
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const cartProduct = useSelector((state) => state.cart.cart);

  const remove =
    cartProduct.length &&
    cartProduct.filter((c) => {
      if (Number(c.qty) === 0) dispatch(deleteCart(c.id));
    });

  const totalDiscount =
    cartProduct.length && helpers.overallDiscount(cartProduct);

  const totalPrice = cartProduct.length && helpers.overallPrice(cartProduct);

  const groupByCategory = data && helpers.productCategory(data);

  // console.log(groupByCategory);

  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>

      <div className="w-100">
        <img
          className="img-fluid"
          src="https://nirmal003.github.io/Images/home1.jpg"
          alt="Diwali Crackers"
        />
      </div>
      <div className="crat_sticky bg-white  d-flex flex-row justify-content-between w-100 text-center px-lg-5 px-md-5">
        <div className="fw-bold text-wrap cart_price">
          Total Products : {cartProduct.length}
        </div>

        <div className="fw-bold text-wrap cart_price">
          Discount Total : ₹.{Math.floor(totalDiscount)}
        </div>

        <div className="fw-bold text-wrap cart_price">
          Overall Total : ₹.{Math.floor(totalPrice)}
        </div>
      </div>
      <>
        {Object.keys(groupByCategory).length ? (
          Object.entries(groupByCategory).map(([key, value]) => (
            <div key={key}>
              <h5 className="pro_title mb-0">{key}</h5>
              <div className="div_con row">
                {value.map((u) => (
                  <div
                    key={u.Product_id}
                    className="pro_con col-12 col-md-5 col-lg-5"
                  >
                    <div className="img_con">
                      <img
                        className="img-fluid"
                        loading="lazy"
                        src={u.Image}
                        alt="no-image"
                        onClick={() =>
                          navigate(`/product/${u.Product_id}`, {
                            state: u.Image,
                          })
                        }
                      />
                      <span className="proId_con">{u.Product_id}</span>
                    </div>

                    <div className="details_con col-md-8 col-8 ">
                      <h4 className="pro_head w-100 text-start">
                        {u.Product_Name}
                      </h4>

                      <div className="w-100 d-flex justify-content-center algin-items-center price_con ">
                        <span className="d-flex flex-column text-center mx-3 ">
                          <strike className="strike">
                            ₹ {Math.round(u.Product_Price)}.00 /{" "}
                            {u.Material_Type}
                          </strike>
                          <span className="price">
                            ₹{" "}
                            {Math.round(
                              `${
                                u.Product_Price -
                                (u.Discount_Percentage / 100) * u.Product_Price
                              }`
                            )}
                            .00 / {u.Material_Type}
                          </span>
                        </span>
                        <TotalPrice u={u} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <h1 className="fw-bold text-center  py-3 bg-warning">
            <ImSpinner3 />
            &nbsp; Loading...
          </h1>
        )}
      </>

      <Button
        variant="success"
        className={`mt-4 fs-5 fw-bold ${
          cartProduct?.length > 0 ? "" : "disabled"
        }`}
      >
        <Link to="/cart" className="text-decoration-none text-white">
          Submit
        </Link>
      </Button>
    </>
  );
}

export default Product;
