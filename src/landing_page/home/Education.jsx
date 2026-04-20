import React from 'react'
import education from '../../assets/images/education.svg'

function Education() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={education} alt="Education" />
                    </div>
                    <div className="col-6 p-5">
                        <h3 className='mb-4'>Free and open market education</h3>
                        <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href="" className='d-inline-block mb-5'>Varsity <i className="fa-solid fa-arrow-right"></i></a>
                        <p className='mb-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
                        <a href="">TradingQ&A<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </>
      );
}

export default Education;