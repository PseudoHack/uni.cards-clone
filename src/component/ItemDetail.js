import React from "react";

const ItemCol = ({ text, textDetail, image, extraImage }) => {
  return (
    <div className="col-md-4 mt-3">
      <div className="text-center my-2">
        <img src={image} alt="" width="80px" />
      </div>
      <p className="fs-3 fw-bolder text-light">{text}</p>
      <p className="text-muted">{textDetail}</p>
    </div>
  );
};

const ItemDetail = () => {
  return (
    <div className="position-relative py-5 bg-black">
      <div className="col-lg-10 mx-auto row py-5">
        <ItemCol
          text="Help, just a WhatsApp away. Anytime, Anyday."
          textDetail="During hectic work hours. On lazy sunday mornings. In the thick of
          night. Anytime."
          image="https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp"
        />
        <ItemCol
          text="No hidden charges, no last minute surprises."
          textDetail="100% money back guarantee if a charge is applied without your knowledge."
          image="https://www.uni.cards/images/nx-wave/rupee_bubble.webp"
        />
        <ItemCol
          text="Super secure. Because we care about your money."
          textDetail={
            <img
              src="https://www.uni.cards/images/pcidss_cert.svg"
              alt=""
              width="80px"
            />
          }
          image="https://www.uni.cards/images/nx-wave/antivirus_bubble.webp"
        />
      </div>
    </div>
  );
};

export default ItemDetail;
