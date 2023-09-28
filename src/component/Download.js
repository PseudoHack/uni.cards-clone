import React from "react";

const Download = () => {
  return (
    <div className="bg-gradient">
      <div className="row" style={{ height: "40vh", width: "100vw" }}>
        <div className="col-lg-8 fs-1 fw-bolder d-flex align-items-center justify-content-center">
          Download now to get started
        </div>
        <div className="col-lg-4  d-flex align-items-center justify-content-center">
          <div className="flex">
            <button className="btn border p-3 rounded border-dark">
              Google Play
            </button>
            <button className="btn border p-3 mx-5 rounded border-dark">
              App Store
            </button>
            {/* <a href="https://unicards.onelink.me/KRuW/"></a> */}
            {/* <a href="https://uni-growth.onelink.me/v6cm/"></a> */}
          </div>
        </div>
      </div>
      <div className="bg-dark text-center py-4 text-light">
        Uni maintains the highest level of security standards
        <img
          src="https://www.uni.cards/images/pcidss_cert.svg"
          className="ms-3 w-20 css-0"
          width="80px"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};

export default Download;
