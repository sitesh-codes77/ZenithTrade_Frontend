import React from 'react'

function Hero() {
    const linkStyle = { color: '#387ed1' }
    const liSpacing = { marginBottom: '0.6rem' }

    return (
        <div className="container mt-5 p-4">
            <div className="row">
                <div className="col-8">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <i className="fa-solid fa-plus text-primary "></i>
                                    &nbsp;&nbsp;  Account Opening
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li style={liSpacing}>
                                            <a href="#" className="text-decoration-none" style={linkStyle}>Resident individual</a>
                                        </li>
                                        <li style={liSpacing}>
                                            <a href="#" className="text-decoration-none" style={linkStyle}>Minor</a>
                                        </li>
                                        <li style={liSpacing}>
                                            <a href="#" className="text-decoration-none" style={linkStyle}>Non Resident Indian (NRI)</a>
                                        </li>
                                        <li style={liSpacing}>
                                            <a href="#" className="text-decoration-none" style={linkStyle}>Company, Partnership, HUF and LLP</a>
                                        </li>
                                        <li style={liSpacing}>
                                            <a href="#" className="text-decoration-none" style={linkStyle}>Glossary</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mt-4">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <i className="fa-regular fa-circle-user text-primary"></i>
                                    &nbsp;&nbsp; Your Zenithtrade Profile
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Your Profile</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Account modification</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Nomination</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Transfer and conversion of securities</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mt-4">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="#collapseThree">
                                    <i className="fa-brands fa-square-xing text-primary"></i>
                                    &nbsp;&nbsp; Kite
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>IPO</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Trading FAQs</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Margin Trading Facility (MTF) and Margins</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Charts and orders</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Alerts and Nudges</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>General</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mt-4">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <i className="fa-brands fa-bitcoin text-primary"></i>
                                    &nbsp;&nbsp; Funds
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>IPO</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Trading FAQs</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Margin Trading Facility (MTF) and Margins</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Charts and orders</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Alerts and Nudges</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>General</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mt-4">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="#collapseFive">
                                    <i className="fa-solid fa-terminal text-primary"></i>
                                    &nbsp;&nbsp; console
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Portfolio</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Corporate actions</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Funds statement</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Reports</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Profile</a></li>
                                        <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Segments</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item mt-4">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    <i className="fa-solid fa-coins text-primary"></i>
                                    &nbsp;&nbsp; Coin
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                 <ul>
                                    <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Mutual funds</a></li>
                                    <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>National Pension Scheme (NPS)</a></li>
                                    <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Fixed Deposit (FD)</a></li>
                                    <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Features on Coin</a></li>
                                    <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>Payments and Orders</a></li>
                                    <li style={liSpacing}><a href="#" className="text-decoration-none" style={linkStyle}>General</a></li>
                                 </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-4">
                    {/* Top Notification Box */}
                    <div
                        className="p-3 mb-4"
                        style={{
                            backgroundColor: '#fdf8f3', // Light beige/yellow background
                            borderLeft: '5px solid #f29b20' // Thick orange left border
                        }}
                    >
                        {/* ps-4 gives the exact bullet indentation, mb-0 removes extra bottom space */}
                        <ul className="mb-0 ps-4" style={{ lineHeight: '1.8' }}>
                            <li className="mb-2" style={{ marginBottom: '0.6rem' }}>
                                <a href="#" className="text-decoration-underline" style={linkStyle}>
                                    Latest Intraday leverages and Square-off timings
                                </a>
                            </li>
                            <li style={{ marginBottom: '0.6rem' }}>
                                <a href="#" className="text-decoration-underline" style={linkStyle}>
                                    Surveillance measure on scrips - June 2026
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links List Group */}
                    {/* Using Bootstrap's card and list-group to get those perfect dividers */}
                    <div className="card rounded-0" style={{ borderColor: '#f0f0f0' }}>

                        {/* Header section */}
                        <div
                            className="card-header border-bottom-0 py-3"
                            style={{ backgroundColor: '#f8f9fa' }}
                        >
                            <h6 className="mb-0 text-dark" style={{ fontWeight: '500' }}>Quick links</h6>
                        </div>

                        {/* List items (list-group-flush removes outer borders) */}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item py-3 px-4" style={{ borderColor: '#f0f0f0', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                <a href="#" className="text-decoration-none" style={linkStyle}>
                                    1. Track account opening
                                </a>
                            </li>

                            {/* Notice this specific link is dark text in your screenshot */}
                            <li className="list-group-item py-3 px-4" style={{ borderColor: '#f0f0f0', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                <a href="#" className="text-decoration-none" style={linkStyle}>
                                    2. Track segment activation
                                </a>
                            </li>

                            <li className="list-group-item py-3 px-4" style={{ borderColor: '#f0f0f0', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                <a href="#" className="text-decoration-none" style={linkStyle}>
                                    3. Intraday margins
                                </a>
                            </li>

                            <li className="list-group-item py-3 px-4" style={{ borderColor: '#f0f0f0', paddingTop: '1rem', paddingBottom: '1rem' }}>
                                <a href="#" className="text-decoration-none" style={linkStyle}>
                                    4. Kite user manual
                                </a>
                            </li>

                            <li className="list-group-item py-3 px-4 border-bottom-0" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                                <a href="#" className="text-decoration-none" style={linkStyle}>
                                    5. Learn how to create a ticket
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;