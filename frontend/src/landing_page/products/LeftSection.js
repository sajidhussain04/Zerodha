import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learn,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 p-4 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxHeight: "420px", objectFit: "contain" }}
          />
        </div>
        <div className="col-lg-6 px-4">
          <h2 className="fw-semibold text-muted mb-3 fs-4">{productName}</h2>
          <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
            {productDescription}
          </p>
          <div className="d-flex gap-4 mb-4">
            <a href={tryDemo} className="text-decoration-none fw-medium">
              Try demo{" "}
              <i
                className="fa-solid fa-arrow-right"
                style={{ fontSize: "10px" }}
              ></i>
            </a>
            <a href={learn} className="text-decoration-none fw-medium">
              Learn more{" "}
              <i
                className="fa-solid fa-arrow-right"
                style={{ fontSize: "10px" }}
              ></i>
            </a>
          </div>
          <div className="d-flex gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "45px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "45px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
