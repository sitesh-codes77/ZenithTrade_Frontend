import React from 'react'
import Universecomponent from './UniverseComponent'
import zerodhafundhouse from '../../assets/images/zerodhaFundhouse.png'
import sensibull from '../../assets/images/sensibullLogo.svg'
import goldenpi from '../../assets/images/goldenpiLogo.png'
import streak from '../../assets/images/streakLogo.png'
import smallcase from '../../assets/images/smallcaseLogo.png'
import ditto from '../../assets/images/dittoLogo.png'

function Universe() {
    return (
        <div className='container'>
            <div className="row text-center">
                <h4 className='mt-5 mb-5'>Want to know more about our technology stack? Check out the <a href="https://Zerodha.tech">Zerodha.tech</a> blog.</h4>

                <h5 className='mt-5 mb-3'>The ZeinthTade Universe</h5>
                <p>Extend your trading and investment experience even further with our partner platforms</p>


                <Universecomponent imagename={zerodhafundhouse} description="Our asset management venture that is creating simple and transparent index funds to help you save for your goals." />
                <Universecomponent imagename={sensibull} description="Options trading platform that lets you
                    create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more.
                    " />
                <Universecomponent imagename={goldenpi} description="Investment research platform
                    that offers detailed insights on stocks,
                    sectors, supply chains, and more." />
                <Universecomponent imagename={streak} description="Systematic trading platform
                    that allows you to create and backtest
                    strategies without coding." />
                <Universecomponent imagename={smallcase} description="Thematic investing platform
                    that helps you invest in diversified
                    baskets of stocks on ETFs." />
                <Universecomponent imagename={ditto} description="Personalized advice on life
                    and health insurance. No spam
                    and no mis-selling." />

                 <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{ width: '20%', margin: '2rem auto' }}>Signup For Free</button>
            </div>
        </div>
    );
}

export default Universe;