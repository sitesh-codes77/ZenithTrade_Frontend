import React from "react";

function Hero() {
    return (
        <>
            <div className="container text-center mt-5 p-5">
                <h2>Zerodha Products</h2>
                <h4 className="text-muted mt-3 fs-5">
                    Sleek, modern, and intuitive trading platforms
                </h4>
                <p className="mt-3">
                    Check out our{" "}
                    <a href="" style={{ textDecoration: "none" }}>
                        investment offerings <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </p>
            </div>
            <hr className="mt-5 opacity-1"/>
        </>
    );
}

export default Hero;
