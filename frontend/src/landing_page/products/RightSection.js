import React from "react";

function LeftSection({ imageURL, productName, productDescription, learn }) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 px-4">
          <h2 className="fw-semibold text-muted mb-3 fs-4">{productName}</h2>
          <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
            {productDescription}
          </p>
          <div className="d-flex gap-4 mb-4">
            <a href={learn} className="text-decoration-none fw-medium">
              Learn more{" "}
              <i
                className="fa-solid fa-arrow-right"
                style={{ fontSize: "10px" }}
              ></i>
            </a>
          </div>
        </div>
        <div className="col-lg-6 p-4 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxHeight: "420px", objectFit: "contain" }}
          />
        </div>        
      </div>
    </div>
  );
}

export default LeftSection;
