import React from "react";

const Commitment = () => {
  return (
    <>
      <div style={{ height: "60vh", background: "rgb(141, 141, 149)" }}>
        <div className="col-lg-8 mx-auto">
          <p className="text-center fs-1 py-5">
            At Uni, we’re committed to{" "}
            <span className="text-gradient">
              delivering an unmatched credit experience
            </span>{" "}
            for millions of Indians.
          </p>
          <div className="text-center">
            On this mission, we’ve partnered with some of the best in the
            business.
          </div>
          <div className="text-center mt-4">
            <img src="https://www.uni.cards/images/SBM.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="col-lg-5 mx-auto">
          <div className="text-center fs-5 py-5 text-light">
            Please note that to stay compliant with RBI guidelines, we have
            discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
          </div>
        </div>
      </div>
    </>
  );
};

export default Commitment;
