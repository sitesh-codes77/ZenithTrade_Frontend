import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import kite from '../../assets/images/kite.png'
import Coin from '../../assets/images/coin.png'
import varsity from '../../assets/images/varsity.png'
import Console from '../../assets/images/products-console.png'
import Kiteconnect from '../../assets/images/kiteconnect.png'

function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection
                imageurl={kite}
                productName="kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="Try Demo"
            />
            <RightSection
                imageurl={Console}
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
                tryDemo="Learn More"
            />
            <LeftSection
                imageurl={Coin}
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo="Coin"
            />
            <RightSection
                imageurl={Kiteconnect}
                productName="Kite Connect API"
                productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                tryDemo="Kite Connect"
            />
            <LeftSection
                imageurl={varsity}
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo=""
            />


            <Universe />
        </>
    );
}

export default ProductPage;
