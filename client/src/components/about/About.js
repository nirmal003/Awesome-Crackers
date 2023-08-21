import React from "react";
import {
  FaHeart,
  FaMagic,
  FaPhoneAlt,
  FaPuzzlePiece,
  FaTag,
} from "react-icons/fa";
import "./about.css";

function About() {
  return (
    <>
      <div className="w-100">
        <img
          className="img-fluid"
          src="https://nirmal003.github.io/Images/home1.jpg"
          alt="Diwali Crackers"
        />
      </div>

      <div className="container my-3">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 text-center align-self-center pt-4">
            <img
              src="https://nirmal003.github.io/Images/about1.jpg"
              className="img-fluid abtlogo"
              alt="Sivakasi Crackers"
              title="Wholesale Crackers"
            />
          </div>

          <div className="col-lg-6 col-md-6 col-12 pt-4 align-self-center">
            <h1 className="acme clr-red text-center fw-bold">
              " Awesome Crackers Sivakasi Online Crackers Shop "
            </h1>
            <p className="roboto para-lh">
              Awesome Crackers is the leading supplier of crackers &amp; fancy
              crackers items. Firecrackers have always been an integral part of
              indian culture and tradition. Be it a festival, a wedding, reunion
              or any other special occasion, it is in our hearts to celebrate it
              in the glory of lights. Our aim is to provide the excellent
              services and true value for money.
            </p>
          </div>
        </div>
      </div>

      <div className="parall bg_overlay">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="box-bg box-left">
                <h1 className="acme heading3 text-white fw-bold pb-lg-4">
                  <i>
                    Fireworks Direct Outlet Available With Discount. Celebrate
                    Diwali with Awesome Crackers!....
                  </i>
                </h1>
                <p className="roboto para-lh  text-white">
                  Our service is to fulfill your needs and requirements to the
                  maximum extent possible. We are the best place to fullfill
                  your cracker shopping. We have cracker gift boxes, rockets,
                  ground chakkars, flowerpots, sparklers, skyshots and various
                  other type of crackers. After understanding the hardship of
                  buying quality crackers during diwali season we came up with
                  the solution to buy crackers online. We sell products only
                  which is of good quality and received acceptance by the
                  customers.
                </p>
                <div className="toll-free-cta">
                  <a
                    href="tel:+919894740650"
                    className="clr-red heading5 acme text-decoration-none"
                  >
                    <FaPhoneAlt className="clr pb-1" /> +91 98947 40650
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12"></div>
          </div>
        </div>
      </div>

      <div className="container px-3 pt-4 pb-4">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 pb-2 text-center">
            <h1 className="acme clr-red fw-bold mb-1">Why Choose Us</h1>
            <img
              src="https://nirmal003.github.io/Images/line.png"
              className="w-10 mb-1"
              alt="RJR Agency"
              title=" RJR Agency"
            />
            <p className="roboto">
              In a competitive world of fire crackers, we are well known for
              qualitative crackers and fancy novelties at reasonable price. The
              products quality are 100% good and delivered safely. Select your
              favorite crackers from our wide range of collections and also
              provide the number of items in each product. Our services created
              a positive image among our customers
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3 text-center pt-2 padht">
            <div className="cardwrapper card1st shadow ">
              <div className="pb-4">
                <FaPuzzlePiece className="cardicn" />
              </div>
              <div className="card-box">
                <h3 className="acme pb-3 heading4 text-white">Quality</h3>
                <p className="roboto text-white">
                  Quality &amp; innovation are the key behind our success
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 text-center pt-3 padht text-white">
            <div className="cardwrapper card2nd shadow ">
              <div className="card-img pb-4 text-white">
                <FaMagic className="cardicn text-white" />
              </div>
              <div className="card-box">
                <h3 className="acme pb-3 heading4">Safe to Use</h3>
                <p className="roboto">
                  Crackers we offer are safe and are made from fine quality raw
                  materials.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 text-center pt-3 padht">
            <div className="cardwrapper card1st shadow ">
              <div className="card-img pb-4">
                <FaTag className="cardicn" />
              </div>
              <div className="card-box">
                <h3 className="acme pb-3 heading4 text-white">Genuine Price</h3>
                <p className="roboto text-white">
                  Quality products at economic price is the main motto for us.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 text-center pt-3 padht text-white">
            <div className="cardwrapper card2nd shadow ">
              <div className="card-img pb-4">
                <FaHeart className="cardicn" />
              </div>
              <div className="card-box">
                <h3 className="acme pb-3 heading4">Satisfaction</h3>
                <p className="roboto">
                  Our quality and timely delivery has attracted customers
                  easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
