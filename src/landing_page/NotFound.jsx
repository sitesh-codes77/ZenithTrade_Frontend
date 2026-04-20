import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
           <div className='container p-5 mb-5'>
            <div className='row text-center'>         
                <h3 className='mt-5 mb-4 text-muted'>404 Not Found</h3>
                <p className='fs-5 text-muted'>The page you are looking for does not exits.</p>
                <Link className='p-2 btn btn-primary fs-5 mb-5' style={{ width: '20%', margin: '1rem auto' }} to="/">Go Home</Link>
            </div>

        </div> 
     );
}

export default NotFound;