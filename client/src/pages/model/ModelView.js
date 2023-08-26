import React from "react";
import { IoIosClose } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import "./modelview.css";

function ModelView() {
  const { state: imgUrl } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="overlay" onClick={() => navigate(-1)}></div>
      <div className="model text-center">
        <span className="span" onClick={() => navigate(-1)}>
          <IoIosClose />
        </span>
        <div className="modelimg_con">
          <img src={imgUrl} loading="lazy" alt="no-file" />
        </div>
      </div>
    </>
  );
}

export default ModelView;
