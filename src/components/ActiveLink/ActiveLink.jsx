import React from 'react';
import './ActiveLink.css'
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (

        <NavLink style={{ display: 'flex', gap: '12px', justifyItems: 'center' }}
            to={to}
            className={({ isActive }) => isActive ? "active" : "deActive"}
        >
            {children}
        </NavLink>

    );
};

export default ActiveLink;