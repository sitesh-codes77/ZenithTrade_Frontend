import React from 'react'
import Pricing0 from '../../assets/images/pricing0.svg'
import Pricing20 from '../../assets/images/pricing20.svg'

function Pricing() {
    return (  
        <div className="container p-5">
            <div className="row ">
                <div className="col-5">
                    <h2 className='mb-5'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="">See Pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-7 p-5">
                    <div className="row">
                        <div className="col-4 d-flex align-items-center ">
                            <img src={Pricing0} alt="0price" style={{ width: '70%' }}/>
                            <p style={{fontSize:"0.7rem",margin:"2.3rem 0 0 -2rem"}} className='text-muted'> Free account opening</p>
                        </div>
                        <div className="col-4 d-flex align-items-center" style={{marginLeft:"-0.8rem",width:"33%"}}>
                            <img src={Pricing0} alt="0price" style={{ width: '70%' }}/>
                            <p style={{fontSize:"0.6rem",margin:"2.3rem 0 0 -2rem"}} > Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col-4 d-flex align-items-center">
                            <img src={Pricing20} alt="20price" style={{ width: '70%' }}/>
                            <p style={{fontSize:"0.7rem",margin:"1.8rem 0 0 -0.8rem"}} className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;