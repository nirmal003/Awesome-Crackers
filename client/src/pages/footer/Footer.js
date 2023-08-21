import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import "./footer.css";

function Footer() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/cart" &&
        pathname !== "/estimate" &&
        !pathname.startsWith("/invoice") && (
          <div className="footer bg-primary">
            {pathname !== "/contact" && (
              <>
                <div className="footer__call">
                  <div className="container">
                    <div className="footer__call__content">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 ">
                          <div className="footer__call__text">
                            <span className="text-white roboto">
                              Contact with us
                            </span>
                            <h2 className="acme text-white mb-2 ">
                              For Call &amp; WhatsApp
                            </h2>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="footer__call__number">
                            <div className="footer__call__number__icon">
                              <img
                                src="https://nirmal003.github.io/Images/contact1.png"
                                className="img-fluid"
                                alt="contact1"
                                title="contact1"
                              />
                            </div>
                            <div className="footer__call__number__text">
                              <span className=" text-white roboto">
                                Call us now
                              </span>
                              <h2 className="acme text-white fnt1">
                                + 91 98947 40650
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row pb-4">
                    <div className="col-lg-4 col-md-6 col-12">
                      <h1 className="clr-blk fw-bolder acme heading3 pb-2">
                        Awesome Crackers
                      </h1>
                      <p className="roboto text-white text-start smallfnt">
                        "Awesome Crackers" is acknowledged as the renowned
                        manufacturer of an exclusive range of Ground Chakkar,
                        Flower Pots, Twinkling Star, Atom Bomb, Rockets etc.
                      </p>
                      <p className="roboto text-white text-start smallfnt">
                        We offer the best quality products at best price.Make
                        celebrations more memorable with superior quality of our
                        crackers all over India.
                      </p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                      <h1 className="clr-blk fw-bolder acme heading3 pb-2">
                        Get In Touch
                      </h1>

                      <div className="text1">
                        <FaMapMarkerAlt className="text-white" />
                        <div className="roboto fn text-white smallfnt">
                          4/480, Veerachelliya Puram,
                          <br /> Sivakasi, Virudhunagar - 626 005
                        </div>
                      </div>

                      <div className="text1">
                        <FaPhoneAlt className="text-white" />
                        <div className="roboto fn text-white text-start  smallfnt">
                          +91 98947 40650
                        </div>
                      </div>

                      <div className="text1">
                        <FaPhoneAlt className="text-white text-end" />
                        <div className="roboto fn text-white text-start smallfnt">
                          +91 97913 24210
                        </div>
                      </div>

                      <div className="text1">
                        <FaPhoneAlt className="text-white" />
                        <div className="roboto fn text-white smallfnt">
                          +91 80724 60650
                        </div>
                      </div>

                      <div className="text1">
                        <GrMail className="text-white" />
                        <div className="roboto fn text-white smallfnt">
                          awesomecrackerss@gmail.com
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-12">
                      <h1 className="clr-blk fw-bolder acme heading3 pb-2">
                        Reach Us
                      </h1>

                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.249301856351!2d77.8964142!3d9.5737655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06d399cbb66739%3A0xc7f2a8d12bb02420!2sAwesome%20Crackers!5e0!3m2!1sen!2sin!4v1691351471262!5m2!1sen!2sin"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        loading="lazy"
                        title="Awesome Crackers"
                      />
                    </div>
                    <div className="col-lg-12 text-center pt-4">
                      <p className="roboto text-white smallfnt">
                        As per 2018 supreme court order, online sale of
                        firecrackers are not permitted! We value our customers
                        and at the same time, respect jurisdiction. We request
                        you to add your products to the cart and submit the
                        required crackers through the enquiry button. We will
                        contact you within 24 hrs and confirm the order through
                        WhatsApp or phone call. Please add and submit your
                        enquiries and enjoy your Diwali with Awesome Crackers.
                        Our License No.----. Awesome Crackers as a company
                        following 100% legal & statutory compliances and all our
                        shops, go-downs are maintained as per the explosive
                        acts. We send the parcels through registered and legal
                        transport service providers as like every other major
                        companies in Sivakasi is doing so.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="container">
              <div className="footer__copyright">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <ul className="fullpad">
                      <li className="text-white roboto text-center smallfnt">
                        Copyright &copy; 2022, Awesome Crackers.
                        <span className="wrdbrk">All rights reserved </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      <div className="fixed point w0">
        <a onClick={() => window.open("https://wa.me/+919894740650")}>
          <img
            src="https://nirmal003.github.io/Images/whatsappicon.png"
            className="priceicn float-left filter"
            alt="Awesome Crackers"
            title="Awesome Crackers"
          />
        </a>
      </div>

      {/* <div className="fixed point1 w0 d-none d-lg-block">
        <span className="time-of-year">
          <img
            src="https://nirmal003.github.io/Images/callicon.png"
            className="priceicn float-left"
            alt="Malathi Crackers"
            title="Malathi Crackers"
          />
          <div className="tooltip text-white carter text-center">
            For More Details Call <br />
            <FaPhoneAlt className="text-white" />
            +91 98947 40650
          </div>
        </span>
      </div> */}

      <div className="fixed point1 w0 d-lg-none">
        <a href="tel:+919894740650">
          <img
            src="https://nirmal003.github.io/Images/callicon.png"
            className=" priceicn float-left"
            alt="Awesome Crackers"
            title="Awesome Crackers"
          />
        </a>
      </div>

      <div className="fixed point2">
        <Link to="/product">
          <img
            src="https://nirmal003.github.io/Images/quickpurchase.png"
            className="priceicn2 float-right"
            alt="Awesome Crackers"
            title="Awesome Crackers"
          />
        </Link>
      </div>
    </>
  );
}

export default Footer;
