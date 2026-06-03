import React from 'react'

function CgeOpening() {
    return (
        <div className='container p-3 mt-5 mb-3'>
            <h3>Charges for account opening</h3>
            <table className='table border table-striped mt-4'>
                <thead>
                    <tr>
                        <th>Type of account</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Individual account</td>
                        <td><span className="p-1 bg-success text-white" >FREE</span></td>
                    </tr>
                    <tr>
                        <td>Minor account</td>
                        <td><span className="p-1 bg-success text-white" >FREE</span></td>
                    </tr>
                    <tr>
                        <td>NRI account</td>
                        <td>₹ 500</td>
                    </tr>
                    <tr>
                        <td>HUF account</td>
                        <td><span className="p-1 bg-success text-white" >FREE</span> (online) / ₹ 500 (offline)</td>
                    </tr>
                    <tr>
                        <td>Partnership, LLP, and Corporate accounts (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CgeOpening;