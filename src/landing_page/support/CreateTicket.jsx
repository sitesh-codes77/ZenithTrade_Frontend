import React from 'react'

function CreateTicket() {
    return (
        <div style={{background:"#eeeded"}}>
        <div className='container p-5'>
            <div className='d-flex justify-content-between mb-4' >
                <h1>Support Portal</h1>
                <button className='btn btn-primary'>My Ticket</button>
            </div>
            <div
                className="d-flex align-items-center border rounded bg-white overflow-hidden ps-3 gap-2"
                style={{ height: '46px', maxWidth: '100%', width: '100%', borderColor: 'rgba(107, 114, 128, 0.3)' }}
            >
    
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
                    <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                </svg>

                <input
                    type="text"
                    placeholder="Search for products"
                    // form-control makes it a proper Bootstrap input
                    // border-0 and shadow-none remove the default Bootstrap blue glow when clicked
                    className="form-control border-0 shadow-none text-secondary"
                    style={{ fontSize: '0.875rem' }}
                />
            </div>
        </div>
    </div>

    );
}

export default CreateTicket;