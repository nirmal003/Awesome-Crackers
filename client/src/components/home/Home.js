import Aos from "aos";
import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import "./home.css";

import { addData } from "./dataSlice";

function Home() {
  useEffect(() => {
    fetchData();
    Aos.init();

    new WOW.WOW({
      live: false,
    }).init();
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
  console.log(data);

  return (
    <div className="w-100">
      <div className="w-100">
        <img
          className="img-fluid"
          src="https://nirmal003.github.io/Images/home1.jpg"
          alt="Diwali Crackers"
          loading="lazy"
        />
      </div>
      <div className="w-100">
        <img
          className="img-fluid"
          src="https://nirmal003.github.io/Images/homeoffer.jpg"
          alt="Diwali Crackers"
          loading="lazy"
        />
      </div>

      <Row className="my-3 cracker justify-content-center">
        <Col className="col-lg-6 col-md-8 col-12">
          <h3 className="fw-bold text-start ">Welcome To</h3>
          <h2 className="text-danger text-start fw-bold mb-4">
            Awesome Crackers
          </h2>
          <p className="fs-6 para roboto ">
            Awesome Crackers, We are the leading online fireworks supplier of
            all types of conventional crackers including chakras, flowerpots,
            rockets, bombs, sound crackers, etc. Apart from usual varieties, we
            have a wide range of fancy and novel crackers are sold, which
            includes fancy fountains, aerial color novelties, multi-color aerial
            shots, electric crackers, super blast wala crackers, etc. Wide
            collection of gift boxes in different price ranges available for
            gifting purposes. Enjoy a safe and sound Diwali by ordering crackers
            online.
          </p>
          <p className="fs-6 para roboto">
            Our aim is to deliver optimum quality service to our clients has
            been achieved with the help of a well organized infrastructure
            coupled with dedicated man power. Enjoy your festivals such as
            Diwali, Christmas and New Year with us.
          </p>

          <Link to="/product">
            <Button variant="danger" className="mt-2">
              Read More...
            </Button>
          </Link>
        </Col>

        <Col className="col-lg-6 col-md-8 col-12 mt-2">
          <Row>
            <div className="welcome">
              <div>
                <img
                  data-aos="flip-right"
                  className="img1"
                  src="https://nirmal003.github.io/Images/home2.jpg"
                  alt="img2"
                />
              </div>
              <div>
                <img
                  data-aos="flip-left"
                  className="img1 img2"
                  src="https://nirmal003.github.io/Images/home3.jpg"
                  alt="img3"
                />
              </div>
            </div>
          </Row>
          <Row>
            <div className="welcome">
              <div>
                <img
                  data-aos="flip-left"
                  className="img1 img3"
                  src="https://nirmal003.github.io/Images/home4.jpg"
                  alt="img4"
                />
              </div>
              <div>
                <img
                  data-aos="flip-right"
                  className="img1 img4 "
                  src="https://nirmal003.github.io/Images/home5.jpg"
                  alt="img5"
                />
              </div>
            </div>
          </Row>
        </Col>
      </Row>

      <div className="parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 col-md-12 parallaxpad text-center">
              <h1 className="text-white acme headfnt1 txtshdw">
                We have wide variety of crackers at affordable rate
              </h1>
              <h2 className="text-white roboto pb-3 heading4">
                Our service created a positive image among our customers
              </h2>
              <Link to="/product">
                <Button variant="warning" className=" btn1">
                  VIEW NOW
                </Button>
              </Link>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>

      <div className="whyus">
        <div className="container  py-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="acme fw-bolder clr-red">Our Specalities</h1>
              <h2 className="roboto clr pt-2 heading5">
                <i>These are the products we own to you</i>
              </h2>
            </div>
            <div className="col-lg-4 col-md-4 text-center pt-4">
              <Link to="/product">
                <img
                  src="https://nirmal003.github.io/Images/home7.png"
                  className="img-fluid pb-3 wow rollIn"
                  data-aos="flip-right"
                  // data-aos-duration="300"
                  data-aos-delay="100"
                  alt="img7"
                  title="Sivakasi Crackers Shop"
                />
              </Link>
              <h3 className="acme heading3 clr-red">Single Sound</h3>
              <p className="pt-2 roboto">
                Single sound crackers have longer shelf life, low smoke emission
                and safe to use.
              </p>
              <div className="pt-lg-4"></div>
              <Link to="/products">
                <img
                  src="https://nirmal003.github.io/Images/home8.png"
                  className="img-fluid pb-3 wow rollIn"
                  data-aos="flip-left"
                  // data-aos-duration="300"
                  data-aos-delay="100"
                  alt="img8"
                  title="Sivakasi Crackers Shop"
                />
              </Link>
              <h3 className="acme heading3 clr-red">Flower Pots</h3>
              <p className="pt-2 roboto">
                We have different varieties of flower pots with different
                colours.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 align-self-center text-center">
              <Link to="/product">
                <img
                  src="https://nirmal003.github.io/Images/home9.png"
                  className="w-100 pb-4"
                  data-aos="zoom-in"
                  // data-aos-duration="300"
                  data-aos-delay="100"
                  alt="img9"
                  title="Sivakasi Crackers Shop"
                />
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 text-center pt-4">
              <Link to="/product">
                <img
                  src="https://nirmal003.github.io/Images/home10.png"
                  className="img-fluid pb-3 wow rollIn"
                  data-aos="flip-left"
                  // data-aos-duration="300"
                  data-aos-delay="100"
                  alt="img10"
                  title="Sivakasi Crackers Shop"
                />
              </Link>
              <h3 className="acme heading3 clr-red">Ground Chakkars</h3>
              <p className="pt-2 roboto">
                Chakkars are made by advanced machines and quality tested
                materials.
              </p>
              <div className="pt-lg-4"></div>
              <Link to="/products">
                <img
                  src="https://nirmal003.github.io/Images/home11.png"
                  className="img-fluid pb-3 wow rollIn"
                  data-aos="flip-right"
                  // data-aos-duration="300"
                  data-aos-delay="100"
                  alt="img11"
                  title="Fancy Novelties"
                />
              </Link>
              <h3 className="acme heading3 clr-red">Novelties</h3>
              <p className="pt-2 roboto">
                Different collections of fancy novelties are available with
                reasonable rates.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src="https://nirmal003.github.io/Images/home12.jpg"
          className="img-fluid w-100"
          alt="Diwali Crackers"
          title="Diwali Crackers"
        />
      </div>

      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12 pb-4">
            <h1 className="acme text-center fw-bolder clr-red">
              Brands We Handle
            </h1>
          </div>
          <div className="col-lg-3 col-md-4 col-12 text-center">
            <img
              src="https://nirmal003.github.io/Images/home13.jpeg"
              className="img-fluid"
              alt="img13"
              title="img13"
            />
          </div>

          <div className="col-lg-3 col-md-4 col-12 text-center">
            <img
              src="https://nirmal003.github.io/Images/home16.jpeg"
              className="img-fluid"
              alt="img16"
              title="Diwali Traders"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-12 text-center">
            <img
              src="https://nirmal003.github.io/Images/home15.jpeg"
              className="img-fluid"
              alt="img15"
              title="Diwali Traders"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-12 text-center">
            <img
              src="https://nirmal003.github.io/Images/home14.jpeg"
              className="img-fluid"
              alt="img14"
              title="Diwali Traders"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-12 text-center">
            <img
              src="https://nirmal003.github.io/Images/home18.jpeg"
              className="img-fluid"
              alt="img14"
              title="Diwali Traders"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
