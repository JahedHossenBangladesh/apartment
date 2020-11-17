import React from 'react';
import AdminNav from '../AdminNav/AdminNav';
import './MyRent.css'
const MyRent = () => {
    return (
        <div>
            <div class="container-fluid">
                <div className="row bookingList">
                    <div className="col-4 py-3 pl-5 text-left bg-white">
                        <h4>Logo</h4>
                    </div>
                    <div className="col-4 py-3 text-left bg-white">
                        <h4><strong>Booking List</strong></h4>
                    </div>  
                    <div className="col-4 bg-white py-3 pr-5 text-right">
                        <h4>masudRan</h4>
                    </div>   
                <div className="col-md-4 bg-white">
                    <AdminNav></AdminNav>
                </div>
                    <div className="col-md-8 p-3">
                    <div className="bookingTable">
                          <table class="table">
                                <thead class="bookingHeader">
                                    <tr>
                                        <th scope="col">House Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Luxury Villa</td>
                                    <td>$678</td>

                                    <td><button type="submit" class="myRentBtn">View Details</button></td>
                                    
                                    </tr>
                                
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
             </div>
            
        </div>
    );
};

export default MyRent;