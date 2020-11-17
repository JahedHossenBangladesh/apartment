import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './RentHouseDetail.css';


const RentHouseDetail = ({house}) => {
    return (
      
    
    <>
    
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="mSingleAprtmnt text-left">
        <img className="w-100" src={house.img} alt=""/>
        <div className="aprtContent p-3">
          <h1 className="aprtName">Luxury Villa</h1>
          <h3 className="aprtLocation mt-4"><i class="fas fa-map-marker-alt"></i> Nasirabad H/S, Chattogram</h3>
          <div className="d-flex justify-content-between">
            <div className="beedRoom">
              <h5><i class="fas fa-bed"></i> 3 Beedrooms </h5>
            </div>
            <div className="bathRoom">
            <h5><i class="fas fa-bath"></i> 2 Bathrooms </h5>
            </div>
          </div>

          <div className="d-flex justify-content-between pt-4 pb-3">
            <div className="price">
              <h5>${house.price}</h5>
            </div>
            <div className="aprtBtn">
              <button> {house.btn} </button>
            </div>
          </div>
        </div>
        
      </div>
        
         
    
    </div>
       {/* onClick={() => handleBook(props.event.btn)}  */}
      
     </>

    );
};

export default RentHouseDetail;