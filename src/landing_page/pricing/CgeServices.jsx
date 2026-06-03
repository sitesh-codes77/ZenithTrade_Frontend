import React from 'react'

function CgeServices() {
    return (
        <section class="charges-sections">
            <div class="container mb-3 mt-5">
                <h2 className="mb-4">Charges for optional value added services</h2>
                <div className="container">
                    <table className='table border'>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Billing Frequency</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tickertape</td>
                                <td>Monthly / Quarterly / Annual</td>
                                <td>Free: 0 | Pro: 249/699/2399</td>
                            </tr>
                            <tr>
                                <td>Smallcase</td>
                                <td>Per transaction</td>
                                <td>Buy &amp; Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr>
                                <td>Kite Connect</td>
                                <td>Monthly</td>
                                <td>Connect: 500 | Personal: Free</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default CgeServices;