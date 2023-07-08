import React from 'react';
import {Link} from 'react-router-dom'

const SingleCategory = ({ category }) => {
    return (
        <>
            
            <li className='border-t'>
                <Link>{category.category}</Link>
            </li>
        </>
    );
};

export default SingleCategory;