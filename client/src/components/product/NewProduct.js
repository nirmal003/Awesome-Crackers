import React from "react";

function NewProduct() {
  return (
    <>
      <div class="col-12 fullpad">
        <h1 class="bgclr heading6 text-center roboto mb-0 category_row">
          Sigle Sound Crackers (80% Discount){" "}
        </h1>
      </div>
      <div class="col-lg-12">
        <div class="row pb-2 product-form">
          <div class="col-lg-4 col-md-6 col-12 pt-2 text-center secpad pricelist_products">
            <div class="d-flex justify-content-center feature-gd w-100 product_row">
              <div class="icon align-self-center w-25 product_image">
                <div class="sno roboto">1</div>
                <img
                  src="images/upload/product_image_03_10_2022_02_53_41.jpg"
                  id=""
                  alt="2 3/4 '' Kuruvi Crackers"
                  title="2 3/4 '' Kuruvi Crackers"
                  onClick="Javascript:ShowProductImageVideo(this);"
                />
              </div>
              <div class="roboto w-75">
                <div
                  id="4d6d68774d314e5656465257546d5179564756445a553544616d744451543039"
                  class="product_name mt-lg-2 producttext"
                >
                  2 3/4 '' Kuruvi Crackers
                </div>
                <div class="d-flex w-100 pt-1">
                  <div class="float-left leftmargin w-50 rate_div">
                    <div class="strike">
                      <i class="fa fa-inr"></i>{" "}
                      <span class="actual_price">35.00</span> / PKT{" "}
                    </div>
                    <div>
                      <span class="rate">
                        <i class="fa fa-inr"></i>{" "}
                        <span class="price price_4d6d68774d314e5656465257546d5179564756445a553544616d744451543039">
                          7.00
                        </span>{" "}
                        / PKT
                      </span>
                    </div>
                  </div>
                  <div class="float-right qtypad w-50">
                    <span class="form-group">
                      <input
                        type="number"
                        onwheel="this.blur();"
                        class="form-control roboto qty_box quantity_4d6d68774d314e5656465257546d5179564756445a553544616d744451543039"
                        name="quantity"
                        min="1"
                        value=""
                        placeholder="Qty"
                        onFocus="Javascript:CalProductAmount(this);"
                        onBlur="Javascript:CalProductAmount(this);"
                        onKeyup="Javascript:CalProductAmount(this);"
                        onChange="Javascript:CalProductAmount(this);"
                      />
                    </span>{" "}
                    &nbsp;
                    <div class="pricebox roboto" style="background: #e15b5b;">
                      <i class="fa fa-inr"></i>{" "}
                      <span
                        id="0"
                        class="amount amount_4d6d68774d314e5656465257546d5179564756445a553544616d744451543039"
                      >
                        0
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12 pt-2 text-center secpad pricelist_products">
            <div class="d-flex justify-content-center feature-gd w-100 product_row">
              <div class="icon align-self-center w-25 product_image">
                <div class="sno roboto">2</div>

                <img
                  src="images/upload/product_image_05_09_2022_02_58_11.jpg"
                  id="0gVhQHGsPhA"
                  alt="3 1/2 '' Lakshmi Crackers"
                  title="3 1/2 '' Lakshmi Crackers"
                  onClick="Javascript:ShowProductImageVideo(this);"
                />
              </div>
              <div class="roboto w-75">
                <div
                  id="4f464e6a4e7a45304d334e52596d52454b7a684265557376556a51325a7a3039"
                  class="product_name mt-lg-2 producttext"
                >
                  3 1/2 '' Lakshmi Crackers
                </div>
                <div class="d-flex w-100 pt-1">
                  <div class="float-left leftmargin w-50 rate_div">
                    <div class="strike">
                      <i class="fa fa-inr"></i>{" "}
                      <span class="actual_price">75.00</span> / PKT{" "}
                    </div>
                    <div>
                      <span class="rate">
                        <i class="fa fa-inr"></i>{" "}
                        <span class="price price_4f464e6a4e7a45304d334e52596d52454b7a684265557376556a51325a7a3039">
                          15.00
                        </span>{" "}
                        / PKT
                      </span>
                    </div>
                  </div>
                  <div class="float-right qtypad w-50">
                    <span class="form-group">
                      <input
                        type="number"
                        onwheel="this.blur();"
                        class="form-control roboto qty_box quantity_4f464e6a4e7a45304d334e52596d52454b7a684265557376556a51325a7a3039"
                        name="quantity"
                        min="1"
                        value=""
                        placeholder="Qty"
                        onFocus="Javascript:CalProductAmount(this);"
                        onBlur="Javascript:CalProductAmount(this);"
                        onKeyup="Javascript:CalProductAmount(this);"
                        onChange="Javascript:CalProductAmount(this);"
                      />
                    </span>{" "}
                    &nbsp;
                    <div class="pricebox roboto" style="background: #e15b5b;">
                      <i class="fa fa-inr"></i>{" "}
                      <span
                        id="0"
                        class="amount amount_4f464e6a4e7a45304d334e52596d52454b7a684265557376556a51325a7a3039"
                      >
                        0
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProduct;
