import React from 'react';

const OutletContainer = ({ children }) => {
    return (
        <div className='mb-16 md:px-5 pb-5 pt-2'>
            {children}
        </div>
    );
};

export default OutletContainer;