import React from 'react'

function RightSection({ imageurl, productName, productDescription, tryDemo }) {
    return (

        <div className="container p-5">
            <div className="row p-3">
                <div className="col-4 mt-5 p-3">
                    <h3 className="mb-4">{productName}</h3>
                    <p style={{ lineHeight: "1.8rem", fontSize: "1rem" }}>
                        {productDescription}{" "}
                    </p>
                    <a href="">
                        {tryDemo}
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                <div className="col-1"></div>
                <div className="col-7 p-3">
                    <img src={imageurl} alt="" />
                </div>
            </div>
        </div>

    );
}

export default RightSection;