import React from "react";
import { IoIosClose } from "react-icons/io";
import "./modelview.css";

function ModelView({ show, imgUrl }) {
  return (
    <>
      <div className="overlay" onClick={show}></div>
      <div className="model text-center">
        <span className="span" onClick={show}>
          <IoIosClose />
        </span>

        <img src={imgUrl} loading="lazy" alt="no-file" className="w-100" />
      </div>
    </>
  );
}

export default ModelView;
