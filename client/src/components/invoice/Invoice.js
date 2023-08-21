import { PDFDownloadLink } from "@react-pdf/renderer";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { FaPrint } from "react-icons/fa";
import { ImSpinner3 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "./firebase";
import "./invoice.css";

import { deleteAllCart } from "../product/cartSlice";
import MyDocument from "./MyDocument";

function Invoice() {
  const dt = useParams();
  const [blob, setBlob] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const cartProduct = useSelector((state) => state.cart.cart);
  const userData = useSelector((state) => state.user.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const callfn = async (blob) => {
    setPdfUrl(null);
    console.log(blob);

    if (Number(cartProduct.length) !== 0 && blob) {
      try {
        const storageRef = ref(storage, `invoice-${dt.time}.pdf`);
        const snapshot = await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(snapshot.ref);
        localStorage.setItem("url", JSON.stringify(downloadURL));
        const url_Link = await JSON.parse(localStorage.getItem("url"));
        setPdfUrl(url_Link);

        fetch(
          `${process.env.REACT_APP_SEND_INVOICE}?invoice_No=${dt.time}&pdf_Url=${downloadURL}`,
          {
            mode: "no-cors",
          }
        );

        dispatch(deleteAllCart());
        console.log("deletedAll", url_Link);
      } catch (err) {
        console.log(err);
      }
    }
    const url_Link = JSON.parse(localStorage.getItem("url"));
    if (localStorage.length) setPdfUrl(url_Link);
  };

  useMemo(() => {
    callfn(blob);
  }, [blob, dt.time]);

  const goBack = () => {
    dispatch(deleteAllCart());
    navigate("/product");
  };

  return (
    <div className="d-flex flex-column  my-3 mb-5 pb-5">
      <h2 className="fw-bold text-success my-2">
        Your order successfully placed...
      </h2>
      <h5 className="thanks_card">
        Thanks for purchasing in Awesome Crackers. We will contact you soon
      </h5>
      <h2 className="fw-bold my-2 mb-3">Download PDF Invoice</h2>

      <PDFDownloadLink
        className="mb-2"
        document={<MyDocument dt={dt} item={cartProduct} user={userData} />}
        fileName="AwesomeInvoice.pdf"
      >
        {({ blob, url, loading }) =>
          loading ? (
            <div>
              {!pdfUrl && (
                <Button className="fs-5">
                  <ImSpinner3 />
                  &nbsp; Loading...
                </Button>
              )}
            </div>
          ) : (
            <div onClick={setBlob(blob)}>
              {!pdfUrl && (
                <Button
                  className={`bg-secondary fw-bold border-0 px-3 fs-5${
                    cartProduct.length > 0 ? "" : "d-none"
                  }`}
                >
                  <FaPrint /> &nbsp; Invoice PDF file
                </Button>
              )}
            </div>
          )
        }
      </PDFDownloadLink>

      {pdfUrl ? (
        <a href={pdfUrl} download="invoice" target="_blank" rel="noreferrer">
          <Button
            className={`bg-secondary fw-bold border-0 px-3 fs-5 ${
              Number(cartProduct.length) === 0 ? "" : "d-none"
            }`}
          >
            <FaPrint /> &nbsp; Invoice PDF file
          </Button>
        </a>
      ) : (
        <div>
          <Button
            className={`bg-secondary fw-bold border-0 px-3 fs-5 ${
              Number(cartProduct.length) === 0 ? "" : "d-none"
            }`}
          >
            <ImSpinner3 />
            &nbsp; Loading...
          </Button>
        </div>
      )}

      <br />

      {pdfUrl && (
        <div>
          <Button
            variant="danger px-5 mb-5 fs-5 fw-lighter"
            onClick={() => goBack()}
          >
            Back
          </Button>
        </div>
      )}

      {pdfUrl && (
        <iframe
          src={pdfUrl}
          width="100%"
          height={940}
          title="invoice"
          className="d-none d-lg-block d-md-block"
        />
      )}
    </div>
  );
}

export default Invoice;
