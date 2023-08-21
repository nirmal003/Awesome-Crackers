import React from "react";

function Contact() {
  return (
    <div>
      <div className="w-100">
        <img
          className="img-fluid"
          src="https://nirmal003.github.io/Images/home1.jpg"
          alt="Diwali Crackers"
        />
      </div>

      <div className="container w-100 mt-4">
        <div className="row my-3 ">
          <div className="col-lg-5 col-md-5 px-4 text-start">
            <h1 className="acme pb-4 fw-bold">
              <span className="clr-red">Contact</span> us
            </h1>
            <h2 className="acme heading5 pb-2 clr">ADDRESS</h2>
            <p className="roboto pb-2 smallfnt ">
              4/480, Veerachelliya Puram, Sivakasi, Virudhunagar - 626 005
            </p>
            <hr />
            <h2 className="acme heading5 pb-2 clr-red"> MOBILE NUMBER </h2>
            <p className="roboto smallfnt"> +91 98947 40650</p>
            <p className="roboto smallfnt"> +91 97913 24210</p>
            <p className="roboto smallfnt"> +91 80724 60650</p>
            <hr />
            <h2 className="acme heading5 pb-2 clr-red">EMAIL</h2>
            <p className="roboto pb-2 smallfnt">awesomecrackerss@gmail.com </p>
          </div>

          <div className="col-lg-7 col-md-7 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.249301856351!2d77.8964142!3d9.5737655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06d399cbb66739%3A0xc7f2a8d12bb02420!2sAwesome%20Crackers!5e0!3m2!1sen!2sin!4v1691351471262!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              title="Awesome Crackers"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
