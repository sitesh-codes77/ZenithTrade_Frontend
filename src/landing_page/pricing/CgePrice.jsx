import React from 'react'
import price0 from '../../assets/images/pricing0.svg'
import price20 from '../../assets/images/pricing20.svg'

function CgePrice() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-12 p-5 text-center">
                    <img src={price0} alt="0price" style={{width:"15rem"}}/>
                    <h2 className='mb-3'>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-lg-4 col-12 p-5 text-center">
                    <img src={price20} alt="20price" style={{width:"15rem"}}/>
                    <h3 className='mb-3 '>Intraday and F&O trades</h3>
                    <p>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                        intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-lg-4 col-12 p-5 text-center">
                    <img src={price0} alt="0price" style={{width:"15rem"}}/>
                    <h2 className='mb-3 '>Free direct MF</h2>
                    <p> All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default CgePrice;