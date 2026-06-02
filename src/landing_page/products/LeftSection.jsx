import React from "react";
import Googleplaylogo from "../../assets/images/googlePlayBadge.svg";
import Appstorelogo from "../../assets/images/appstoreBadge.svg";


function LeftSection({ imageurl, productName, productDescription, tryDemo }) {
    return (
      <div className="container p-5">
        <div className="row p-3">
          <div className="col-7 p-3">
            <img src={imageurl} alt="" />
          </div>
          {/* <div className="col-1"></div> */}
          <div className="col-4 mt-5 p-3">
            <h3 className="mb-4">{productName}</h3>
            <p style={{ lineHeight: "1.8rem", fontSize: "1rem" }}>
              {productDescription}{" "}
            </p>
            {tryDemo !== "" && (
              <a href="">
                {tryDemo}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
            <div className="mt-4 d-flex gap-3">
              <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN">
                <img src={Googleplaylogo} alt="Google play" />
              </a>
              <a href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802">
                <img src={Appstorelogo} alt="App store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LeftSection;
