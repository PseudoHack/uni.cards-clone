import React from "react";

const Footer = () => {
  return (
    <div className="py-4 pb-5 bg-black">
      <div className="col-lg-10 mx-auto">
          <div className="col-lg-4 px-4">
            <div className="mx-0 md:m-0">
              <svg
                viewBox="0 0 85 60"
                style={{
                  width: "90px",
                }}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z"
                  fill="white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z"
                  fill="#00DCC8"
                ></path>
              </svg>
            </div>
            <div className="text-white-50">
              Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony,
              Koramangala, Bengaluru, Karnataka 560034
              <br />
              <br />
              <span className="text-muted mt-2">
                Contact Us:{" "}
                <a className="text-muted" href="tel: 080 68216821">
                  080 68216821
                </a>
                <br />
                Email:{" "}
                <a className="text-muted" href="mailto: care@uni.club">
                  care@uni.club
                </a>
              </span>
            </div>
          </div>
        <hr className="text-light" style={{ height: "2px" }} />
        <span className="text-white-50 px-4">
          Grievance Redressal Mechanism - SBM Bank India
        </span>
        <hr className="bg-gradient" style={{ height: "2px" }} />
        <div className="container-fluid" style={{maxWidth:'100%'}}>
          <div className="col-lg-6">
            <small>
              <a
                className="text-white-50 text-decoration-none pe-2 border-end"
                href="/"
              >
                Instagram
              </a>
              <a
                className="text-white-50 text-decoration-none px-2 border-end"
                href="/"
              >
                Twitter
              </a>
              <a
                className="text-white-50 text-decoration-none px-2 border-end"
                href="/"
              >
                Facebook
              </a>

              <a className="text-white-50 text-decoration-none px-2" href="/">
                Careers
              </a>
            </small>
          </div>
          <div className="col-lg-6 text-sm-start text-end">
            <small>
              <a
                className="text-white-50 text-decoration-none pe-2 border-end"
                href="/"
              >
                Credit Card KFS
              </a>
              <a
                className="text-white-50 text-decoration-none px-2 border-end"
                href="/"
              >
                Credit Card T&Cs
              </a>
              <a
                className="text-white-50 text-decoration-none px-2 border-end"
                href="/"
              >
                Uni T&Cs
              </a>
              <a className="text-white-50 text-decoration-none px-2" href="/">
                Lending Partner TnCs
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
