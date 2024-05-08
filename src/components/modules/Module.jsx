import React, { Fragment } from "react";
import "./module.scss";

const Module = ({ bool, children, setShowModal }) => {
  function closeModal() {
    setShowModal(false);
    console.log("false");
    document.body.style.overflow = "auto";
  }
  return (
    <Fragment>
      <div
        onClick={closeModal}
        className={bool ? "overlay" : "hideOverlay"}
      ></div>
      <div className={bool ? "module" : "hideModule"}>
        <h1>Module</h1>
        <div className="container module__cards">
          <h1 className="close__btn" onClick={closeModal}>
            X
          </h1>
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default Module;
