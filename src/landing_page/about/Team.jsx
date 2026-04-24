import React from 'react'
import nithinkamath from '../../assets/images/nithinKamath.jpg'
import nikhil from '../../assets/images/Nikhil.jpg'
import kailash from '../../assets/images/kailash.jpg'
import karthik from '../../assets/images/karthik.jpg'
import seema from '../../assets/images/Seema.jpg'
import venu from '../../assets/images/Venu.jpg'
import austin from '../../assets/images/Austin.jpg'

function Team() {
    return (
        <div className="container">
            <div className="row">
                <h1 className='fs-3 text-center'>People</h1>
            </div>

            <div className="row p-5  fs-6" style={{ marginLeft: "-5rem" }}>
                <div className="col text-center text-muted">
                    <img src={nithinkamath} alt="CEO Image" style={{ borderRadius: "100%", width: "50%" }} />
                    <h4 className='mt-4'>Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col mt-4 fst-normal" style={{ marginLeft: "-5rem", fontSize: "1.2rem", paddingRight: "5rem" }}>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>

                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>

                    <p>
                        Playing basketball is his zen.
                    </p>

                    <p>
                        Connect on Homepage / TradingQnA / Twitter
                    </p>
                </div>
                <div className="container p-5 ml-5 mb-3">
                    <div className="row d-flex justify-content-between mb-5">
                        <div className="col-4 text-center">
                            <img src={nikhil} alt="" style={{ borderRadius: "100%", width: "55%" }} />
                            <h4 className='mt-4'>Nithin Kamath</h4>
                            <h6>Founder, CEO</h6>
                            <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#demo" aria-expanded="false">
                                    Bio
                                </button>
                                <ul class="collapse p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end" id="demo">
                                    <p>Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.</p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <img src={kailash} alt="" style={{ borderRadius: "100%", width: "55%" }} />
                            <h4 className='mt-4'>Dr. Kailash Nadh</h4>
                            <h6> CTO</h6>
                             <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#demo1" aria-expanded="false">
                                    Bio
                                </button>
                                <ul class="collapse p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end" id="demo1">
                                    <p>Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day</p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <img src={venu} alt="" style={{ borderRadius: "100%", width: "55%" }} />
                            <h4 className='mt-4'>Venu Madhav</h4>
                            <h6>COO</h6>
                              <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#demo2" aria-expanded="false">
                                    Bio
                                </button>
                                <ul class="collapse p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end" id="demo2">
                                    <p>Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha..</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-4 text-center">
                            <img src={seema} alt="" style={{ borderRadius: "100%", width: "55%" }} />
                            <h4 className='mt-4'>Seema Patil</h4>
                            <h6>Director</h6>
                                <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#demo3" aria-expanded="false">
                                    Bio
                                </button>
                                <ul class="collapse p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end" id="demo3">
                                    <p>Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.</p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <img src={karthik} alt="" style={{ borderRadius: "100%", width: "55%" }} />
                            <h4 className='mt-4'>Karthik Rangappa</h4>
                            <h6>Chief of Education</h6>
                              <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#demo4" aria-expanded="false">
                                    Bio
                                </button>
                                <ul class="collapse p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end" id="demo4">
                                    <p>Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.</p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <img src={austin} alt="" style={{ borderRadius: "100%", width: "55%" }} />
                            <h4 className='mt-4'>Austin Prakesh</h4>
                            <h6>Director Strategy</h6>
                              <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#demo5" aria-expanded="false">
                                    Bio
                                </button>
                                <ul class="collapse p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end" id="demo5">
                                    <p>Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;