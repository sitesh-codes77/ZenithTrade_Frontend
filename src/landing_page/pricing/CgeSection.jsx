import React, { useState } from 'react';

function CgeSection() {
    // 1. Initialize state. We set 'commodity' as the default to match your image.
    const [activeTab, setActiveTab] = useState('equity');

    return (
        <div className="container mt-5 p-3 mb-3">

            {/* 2. The Navigation Tabs */}
            {/* Using Bootstrap's nav-underline for that clean, modern look */}
            <ul className="nav nav-underline fs-5 mb-5 border-bottom " style={{ cursor: 'pointer' }}>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'equity' ? 'active border-2 border-bottom border-primary' : 'text-primary border-0'}`}
                        onClick={() => setActiveTab('equity')}
                    >
                        Equity
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'currency' ? 'active border-2 border-bottom border-primary' : 'text-primary border-0'}`}
                        onClick={() => setActiveTab('currency')}
                    >
                        Currency
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'commodity' ? 'active border-2 border-bottom border-primary' : 'text-primary border-0'}`}
                        onClick={() => setActiveTab('commodity')}
                    >
                        Commodity
                    </a>
                </li>
            </ul>

            {/* 3. The Content Area (Conditional Rendering) */}
            <div className="tab-content">

                {/* If activeTab is 'equity', show this div */}
                {activeTab === 'equity' && (
                    <table className="table text-muted align-middle table-striped border">
                        <thead>
                            <tr>
                                <th scope="col" className="border-0"></th>
                                <th scope="col" className="border-0">Equity delivery</th>
                                <th scope="col" className="border-0">Equity intraday</th>
                                <th scope="col" className="border-0">F&O - Futures</th>
                                <th scope="col" className="border-0">F&O - Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brokerage</td>
                                <td>Zero Brokerage</td>
                                <td>0.03% or Rs. 20/executed<br />order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed<br />order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.1% on buy & sell</td>
                                <td>0.025% on the sell side</td>
                                <td>0.05% on the sell side</td>
                                <td>
                                    <ul className="ps-3 mb-0">
                                        <li>0.15% of the intrinsic value on<br />options that are bought and<br />exercised</li>
                                        <li>0.15% on sell side (on premium)</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Transaction<br />charges</td>
                                <td>NSE: 0.00307%<br />BSE: 0.00375%</td>
                                <td>NSE: 0.00307%<br />BSE: 0.00375%</td>
                                <td>NSE: 0.00183%<br />BSE: 0</td>
                                <td>NSE: 0.03553% (on premium)<br />BSE: 0.0325% (on premium)</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI<br />charges + transaction<br />charges)</td>
                                <td>18% on (brokerage + SEBI<br />charges + transaction<br />charges)</td>
                                <td>18% on (brokerage + SEBI<br />charges + transaction<br />charges)</td>
                                <td>18% on (brokerage + SEBI charges<br />+ transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.015% or ₹1500 / crore on<br />buy side</td>
                                <td>0.003% or ₹300 / crore on<br />buy side</td>
                                <td>0.002% or ₹200 / crore on<br />buy side</td>
                                <td>0.003% or ₹300 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                )}

                {/* If activeTab is 'currency', show this div */}
                {activeTab === 'currency' && (
                    <table className="table text-muted align-middle table-striped border">
                        <thead>
                            <tr>
                                <th scope="col" className="border-0"></th>
                                <th scope="col" className="border-0">Currency futures</th>
                                <th scope="col" className="border-0">Currency options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                                <td>₹ 20/executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>No STT</td>
                                <td>No STT</td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
                                <td>NSE: 0.0311%<br />BSE: 0.001%</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>₹10 / crore</td>
                                <td>₹10 / crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                )}

                {/* If activeTab is 'commodity', show the actual table from your image */}
                {activeTab === 'commodity' && (
                    <table className="table text-muted table-striped border">
                        <thead>
                            <tr>
                                <th scope="col" className="border-0"></th>
                                <th scope="col" className="border-0">Commodity futures</th>
                                <th scope="col" className="border-0">Commodity options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>₹ 20/executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.01% on sell side (Non-Agri)</td>
                                <td>0.05% on sell side</td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>MCX: 0.0021%<br />NSE: 0.0001%</td>
                                <td>MCX: 0.0418%<br />NSE: 0.001%</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>Agri:<br />₹1 / crore<br />Non-agri:<br />₹10 / crore</td>
                                <td><br />₹10 / crore</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
            <h5 className='text-center mt-4'><a className='text-decoration-none' href="/brokerage-calculator">Calculate your costs upfront</a> Using brokearge Calculator</h5>
        </div>
    );
}

export default CgeSection;