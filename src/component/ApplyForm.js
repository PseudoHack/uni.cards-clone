import React, { useState } from "react";

const ApplyForm = () => {
  const [agree, setAgree] = useState(false);
  const checkBoxSelect = () => setAgree(!agree);
  return (
    <>
      <div
        className="col-lg-7 mt-4"
        style={{
          maxWidth: "300px",
        }}
      >
        <div className="input-group mb-3 p-1 bg-dark rounded">
          <input
            type="text"
            style={{
              borderRadius: "10px",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
              border: "0",
              color: "white",
            }}
            className="form-control bg-dark"
            placeholder="Phone Number"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <button
            className="btn btn-warning"
            type="button"
            style={{
              borderRadius: "10px",
            }}
            disabled={!agree}
            id="button-addon1"
          >
            Apply
          </button>
        </div>
        <div className="form-text">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={checkBoxSelect}
            />
            <label className="form-check-label hand-pointer" htmlFor="exampleCheck1">
              <small>
                {" "}
                You agree to be contacted by Uni Cards over Call, SMS, Email or
                WhatsApp to guide you through your application.
              </small>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyForm;
