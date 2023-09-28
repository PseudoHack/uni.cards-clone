import React from "react";

const MoreDetail = () => {
  return (
    <div className="col-lg-9 mx-auto">
      <div className="row my-5">
        <div className="col-md-6 py-3 text-center">
          <img
            src="https://www.uni.cards/images/one_percent_cashback.png"
            alt=""
            style={{
              width: "280px",
            }}
          />
        </div>
        <div className="col-md-6 px-5 order-sm-last order-lg-first d-flex align-items-center">
          <div className="mt-3 fs-3">
            <strong>1% assured cashback on your spends. </strong>
            <span className="text-muted">
              The more you spend, the more you earn.
            </span>
            <div className="mt-4 fs-6">
              <small className="text-muted">
                Not applicable on fuel purchase, rent & wallet transfers, ATM
                withdrawals & international transactions.
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-6 py-3 text-center">
          <img
            src="https://www.uni.cards/images/five_x_rewards.png"
            alt=""
            style={{
              width: "280px",
            }}
          />
        </div>
        <div className="col-md-6 px-5 order-sm-last d-flex align-items-center">
          <div className="mt-3 fs-3">
            <strong>5x more value than your cashback,</strong>
            <span className="text-muted"> only at the Uni Store.</span>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-6 py-3 text-center">
          <img
            src="https://www.uni.cards/images/forex_globe.png"
            alt=""
            style={{
              width: "280px",
            }}
          />
        </div>
        <div className="col-md-6 px-5 order-sm-last order-lg-first d-flex align-items-center">
          <div className="mt-3 fs-3">
            <strong>Zero Forex Markup. </strong>
            <span className="text-muted">
              Go international, without any fees.
            </span>
          </div>
        </div>
      </div>

      <div className="fw-bold text-center fs-2 my-4 pb-5">
        Lifetime <span className="text-light-green">free.</span> No joining fee.
        <br /> No annual charges.
      </div>
    </div>
  );
};

export default MoreDetail;
