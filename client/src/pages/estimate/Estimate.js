import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as helpers from "../../Helper/helper";
import City from "./City";
import "./estimate.css";
import { addUser } from "./userSlice";

function Estimate() {
  useEffect(() => {
    if (Number(cartProduct.length) === 0) navigate("/product");
  }, []);

  const [user, setUser] = useState({});
  const [length, setLength] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartProduct = useSelector((state) => state.cart.cart);
  // console.log(cartProduct);

  const userData = useSelector((state) => state.user.user);
  // console.log(userData);

  const netTotal = cartProduct.length && helpers.netTotal(cartProduct);
  const totalPrice = cartProduct.length && helpers.overallPrice(cartProduct);
  const packingCharge = (totalPrice * 0.03).toFixed(2);
  const roundOff = packingCharge - Math.round(packingCharge);
  const overallTotal = Math.round(totalPrice) + Math.round(packingCharge);

  const getData = (e) => {
    const { name, value } = e.target;
    const inputData = { [name]: value };
    setUser({ ...user, ...inputData });
    // console.log(user);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (user.mobilenumber.match(/^\d{10}$/)) {
      setLength(true);
      dispatch(addUser(user));
      const date = new Date();
      const time = new Date(date).getTime();
      console.log(time);

      const resp = fetch(
        `${process.env.REACT_APP_ORDER}?order_Id=${new Date(
          date
        ).getTime()}&customer_Name=${user.name}&mobile_Number=${
          user.mobilenumber
        }&address=${user.address}&order_Date=${`${new Date(
          date
        ).toLocaleDateString()}  ${new Date(
          date
        ).toLocaleTimeString()}`}&net_total=${netTotal}&sub_total=${Math.round(
          totalPrice
        )}&overall_amount=${overallTotal}&user_Data=${JSON.stringify(
          user
        )}&cart_Items=${encodeURIComponent(JSON.stringify(cartProduct))}`,
        {
          mode: "no-cors",
        }
      );

      navigate(`/invoice/${date}/${time}`);

      // if (resp) {
      //   console.log(resp);
      //   navigate(`/invoice/${date}/${time}`);
      // }
    } else {
      setLength(false);
    }
  };

  return (
    <div className="estimate_page">
      <div className="estimate_con">
        <div className="w-100 estimate_head_con">
          <h1 className="fw-bold acme m-2 ">Awesome Crackers </h1>
          <span className="fs-6 mx-5">
            4/480, Veerachelliya Puram, Sivakasi, Virudhunagar - 626 005
          </span>
          <span className="fs-6 ">Mobile No : 98947 40650</span>
        </div>

        <div className="form_con">
          <form className="" onSubmit={handleOnSubmit}>
            <div className="form-group col-12 p-1">
              <select
                name="state"
                onChange={getData}
                className="w-100 py-2 px-1 form-control shadow-none"
              >
                <option value="" disabled selected>
                  ---- Select your state ----
                </option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Pondicherry">Pondicherry</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Kerala">Kerala</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="form-group col-12 p-1">
              <select
                name="city"
                onChange={getData}
                className="w-100 py-2 px-1 form-control shadow-none"
              >
                <City />
              </select>
            </div>

            <div className="form-group col-12 p-1">
              <input
                type="text"
                name="name"
                className="form-control shadow-none"
                placeholder="Customer Name  (*)"
                required
                onChange={getData}
              />
            </div>

            <div className="form-group col-12 p-1">
              <input
                className={`form-control shadow-none ${
                  length ? "" : "bg-warning fw-bold"
                }`}
                type="number"
                name="mobilenumber"
                placeholder="Mobile Number  (*)"
                required
                onChange={getData}
              />
              {!length && (
                <span className=" fw-bold">
                  Please enter valid mobile number
                </span>
              )}
            </div>

            <div className="form-group col-12 p-1">
              <input
                className="form-control shadow-none"
                type="email"
                name="email"
                placeholder="Email (Optional)"
                onChange={getData}
              />
            </div>

            <div className="form-group col-12 p-1">
              <textarea
                className="form-control shadow-none"
                type="text"
                name="address"
                placeholder="Address  (*)"
                rows="3"
                required
                onChange={getData}
              />
            </div>

            <div className="estimate_amnt text-end p-1">
              <div className="d-flex justify-content-center flex-direction-row algin-items-center pt-2">
                <span className="col-8">Sub Total :</span>
                <span className="col-4">₹ {Math.round(totalPrice)}.00</span>
              </div>
              <div className="fw-bold d-flex justify-content-center flex-direction-row algin-items-center pt-2">
                <span className="col-8">Min.Order Amount :</span>
                <span className="col-4">₹ 2500.00</span>
              </div>
              <div className="d-flex justify-content-center flex-direction-row algin-items-center pt-2">
                <span className="col-8">Packing Charges (3%) :</span>
                <span className="col-4">₹ {packingCharge}</span>
              </div>
              <div className="d-flex justify-content-center flex-direction-row algin-items-center pt-2">
                <span className="col-8">Round OFF :</span>
                <span className="col-4">
                  ₹{" "}
                  {roundOff.toFixed(2) > 0
                    ? `- ${roundOff.toFixed(2)}`
                    : roundOff.toFixed(2) == 0
                    ? `${roundOff.toFixed(2)}`
                    : ` + ${Math.abs(roundOff.toFixed(2))}`}
                </span>
              </div>
              <div className="d-flex justify-content-center flex-direction-row algin-items-center pt-2">
                <span className="col-8">Overall Total :</span>
                <span className="col-4">₹ {overallTotal}.00</span>
              </div>
            </div>

            <Button
              type="submit"
              className={`m-4 submit_btn ${
                Math.round(totalPrice) > 2500 ? "" : "disabled"
              }`}
            >
              Submit
            </Button>

            <Button
              onClick={() => navigate(-1)}
              variant="danger"
              className="m-4 goback_btn"
            >
              Go Back
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Estimate;
