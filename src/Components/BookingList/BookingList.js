import React from 'react';
import AdminNav from '../AdminNav/AdminNav';
import './BookingList.css'

const BookingList = () => {
    return (
        <div className="bookingSec">
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
                                        <th scope="col">Name</th>
                                        <th scope="col">Email Id</th>
                                        <th scope="col">Phone No</th>
                                        <th scope="col">Message</th>
                                        <th scope="col">status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Masud Rana</td>
                                    <td>Email@gmail.com</td>
                                    <td>01759741129</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nisi excepturi explicabo quo laudantium deserunt </td>
                                    <td>
                                    <select class="form-control form-control-sm">
                                        <option>pending</option>
                                        <option>Done</option>
                                    </select>
                                    </td>
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

export default BookingList;