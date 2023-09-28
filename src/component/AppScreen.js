import React from "react";

const AppScreen = ({
  showBackground = false,
  mainText = "",
  gradientText = "",
  descriptionText = "",
  imageSrc = "",
}) => {
  return (
    <div className="position-relative py-5 bg-black">
      {showBackground ? (
        <div className="position-absolute" style={{ top: 0, width: "" }}>
          <img
            src="https://www.uni.cards/images/circles.png"
            alt=""
            style={{ width: "90%" }}
          />
        </div>
      ) : null}

      <div className="col-lg-10 mx-auto">
        <div className="text-light position-relative row">
          <div className="col-lg-6 d-flex align-items-center">
            <div>
              <p className="fs-1 px-5">
                {mainText} <br />
                <span className="text-gradient">{gradientText}.</span>
              </p>
              <div className="px-5">
                <small>{descriptionText}</small>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center px-3">
            <img
              src={imageSrc}
              alt=""
              className="px-5"
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppScreen;
