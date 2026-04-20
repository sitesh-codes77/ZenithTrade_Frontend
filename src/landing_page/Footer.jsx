import React from 'react'
import zerodhalogo from '../assets/images/logo.svg'

function Footer() {
    return (
        <footer className='border-top mt-5 pt-5'>
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <img src={zerodhalogo} alt="zerodhalogo" style={{ width: "50%", marginBottom: "2rem" }} />
                        <p className='text-muted'>&copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved</p>
                        <div className='d-flex justify-content-between mt-5'>
                            <i class="fa-brands fa-facebook footer-app"></i>
                            <i class="fa-brands fa-x-twitter footer-app"></i>
                            <i class="fa-brands fa-youtube footer-app"></i>
                            <i class="fa-brands fa-instagram footer-app"></i>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between mt-3'>
                            <i class="fa-brands fa-linkedin footer-app"></i>
                            <i class="fa-brands fa-whatsapp footer-app"></i>
                            <i class="fa-brands fa-square-reddit footer-app"></i>
                            <i class="fa-brands fa-telegram footer-app"></i>
                        </div>
                    </div>
                    <div className="col d-flex flex-column">
                        <h5 className='mb-4'>Account</h5>
                        <a href="" className="footer-ele">Open demat account</a><br />
                        <a href="" className="footer-ele">Minor demat account</a><br />
                        <a href="" className="footer-ele">NRI demat account</a><br />
                        <a href="" className="footer-ele">HUF demat account</a><br />
                        <a href="" className="footer-ele">Commodity</a><br />
                        <a href="" className="footer-ele">Dematerialisation</a><br />
                        <a href="" className="footer-ele">Fund transfer</a><br />
                        <a href="" className="footer-ele">MTF</a><br />
                    </div>

                    <div className="col d-flex flex-column">
                        <h5 className='mb-4'>Support</h5>
                        <a href="" className="footer-ele">Contact us</a><br />
                        <a href="" className="footer-ele">Support portal</a><br />
                        <a href="" className="footer-ele">How to file a complaint?</a><br />
                        <a href="" className="footer-ele">Status of your complaints</a><br />
                        <a href="" className="footer-ele">Bulletin</a><br />
                        <a href="" className="footer-ele">Circular</a><br />
                        <a href="" className="footer-ele">Z-Connect blog</a><br />
                        <a href="" className="footer-ele">Downloads</a><br />
                    </div>

                    <div className="col d-flex flex-column">
                        <h5 className='mb-4'>Company</h5>
                        <a href="" className="footer-ele">About</a><br />
                        <a href="" className="footer-ele">Philosophy</a><br />
                        <a href="" className="footer-ele">Press & media</a><br />
                        <a href="" className="footer-ele">Careers</a><br />
                        <a href="" className="footer-ele">Zerodha Cares (CSR)</a><br />
                        <a href="" className="footer-ele">Zerodha.tech</a><br />
                        <a href="" className="footer-ele">Open source</a><br />
                        <a href="" className="footer-ele">Referral program</a><br />
                    </div>

                    <div className="col d-flex flex-column">
                        <h5 className='mb-4'>Quick links</h5>
                        <a href="" className="footer-ele">Upcoming IPOs</a><br />
                        <a href="" className="footer-ele">Brokerage charges</a><br />
                        <a href="" className="footer-ele">Market holidays</a><br />
                        <a href="" className="footer-ele">Economic calendar</a><br />
                        <a href="" className="footer-ele">Calculators</a><br />
                        <a href="" className="footer-ele">Markets</a><br />
                        <a href="" className="footer-ele">Sectors</a><br />
                        <a href="" className="footer-ele">Gift Nifty</a><br />
                    </div>
                </div>

                <div className='mt-5 text-muted' style={{ fontSize: "0.65rem" }}>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>

                    <p>
                        Smart Online Dispute Resolution | Grievances Redressal Mechanism
                    </p>

                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>

                    <p>
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>

                    <p>
                        India's largest broker based on networth as per NSE. NSE broker factsheet
                    </p>

                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>

                    <p>
                        *Customers availing insurance advisory services offered by Ditto (Tactical Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
                    </p>

                    <p>
                        Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
                    </p>

                    <div className="d-flex justify-content-evenly">
                        <p>NSE</p>
                        <p>BSE</p>
                        <p>MCX</p>
                        <p>Terms & conditions</p>
                        <p>Policies & procedures</p>
                        <p>Privacy policy</p>
                        <p>Disclosure</p>
                        <p>For investor's attention</p>
                        <p>Investor charter</p>
                    </div>
                </div>


            </div>
        </footer>
    );
}

export default Footer;