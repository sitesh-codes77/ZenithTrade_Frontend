import React from 'react';

function Universecomponent({ imagename, description }) {
    return (
        // The child is now strictly a column, with some padding (p-3) 
        // and top margin (mt-5) for visual spacing
        <div className="col-4 p-2 mt-5 text-center">
            <img src={imagename} alt="product logo" style={{ height: "45px" }} />
            {/* Added text-muted for the grey color and a smaller font size */}
            <p className="text-muted mt-3" style={{ fontSize: "0.9rem", lineHeight: "1.6",padding:" 0 3.5rem" }}>
                {description}
            </p>
        </div>
    );
}

export default Universecomponent;