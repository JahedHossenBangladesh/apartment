import React from 'react';
import './AdminNav.css'
import {
    Link
  } from "react-router-dom";

const AdminNav = () => {
    return (
        <div className="adminNav">
           <ul>
            <li><Link to='/bookinglist'>Booking List</Link></li>
            <li><Link to='/addrent'>Add Rent House</Link></li>
            <li><Link to='/myrent'>My Rent</Link></li>
           </ul>
        </div>
    );
};

export default AdminNav;