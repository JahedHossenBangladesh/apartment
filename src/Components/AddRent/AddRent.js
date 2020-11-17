import React from 'react';
import AdminNav from '../AdminNav/AdminNav';
import './AddRent.css'
const AddRent = () => {
    return (
        <div className="addRent">
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
                        <div className="addRentForm">
                            <form>
                                <div class="form-row text-left">
                                    <div class="col-6 mb-4">
                                    <input type="text" class="form-control" placeholder="Service Title" />
                                    </div>
                                    <div class="col-6 mb-4">
                                    <input type="text" class="form-control" placeholder="Price" />
                                    </div>
                                    <div class="col-6 mb-4">
                                    <input type="text" class="form-control" placeholder="Location" />
                                    </div>
                                    <div class="col-6 mb-4">
                                    <input type="text" class="form-control" placeholder="No Of BeedRoom" />
                                    </div>
                                    <div class="col-6 mb-4">
                                    <input type="text" class="form-control" placeholder="No Of BathRoom" />
                                    </div>
                                    <div class="col-6 mb-4">
                                    <input type="file" id="myFile" name="filename" />
                                    </div>
                                </div>
                                <button type="submit" class="AddRentBtn">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default AddRent;