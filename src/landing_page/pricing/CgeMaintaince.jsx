import React from 'react'

function CgeMaintaince() {
    return (
        <section class="charges-sections">
            <div class="container mt-5 mb-3 p-3">
                <h2 className="mb-3">Demat AMC (Annual Maintenance Charge)</h2>
                <p className='text-muted'>
                    AMC is free for the first year on all new resident individual accounts. From the second year, it depends on whether you have a BSDA or a non-BSDA account.
                </p>
                <p className='text-muted'>
                    For a BSDA account, charges depend on the value of your holdings:
                </p>
                <div class="table-container">
                    <table className='table border'>
                        <thead>
                            <tr className=''>
                                <th>Value of holdings</th>
                                <th>AMC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Up to ₹4 lakh</td>
                                <td><span className="p-1 bg-success text-white" >FREE</span></td>
                            </tr>
                            <tr>
                                <td>₹4 lakh – ₹10 lakh</td>
                                <td>₹100 per year + 18% GST, charged quarterly</td>
                            </tr>
                            <tr>
                                <td>Above ₹10 lakh</td>
                                <td>₹300 per year + 18% GST, charged quarterly</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-muted">
                    For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.
                </p>
                <p className="text-muted">
                    To learn more about BSDA, <a href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha">click here</a>. To learn more about AMC, <a href="https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge">click here</a>.
                </p>
            </div>
        </section>
    );
}

export default CgeMaintaince;