import React, { useState } from 'react';
import './RentHouse.css'
import fakedata from '../FakeData/FakeData'
import RentHouseDetail from '../RentHouseDetail/RentHouseDetail';


const RentHouse = () => {
    const[house,setHouse] = useState(fakedata);
    console.log(house);
    return (
        <div className=" bg-color" >
            <div className="clr">
            <p>Rent House</p>
            <h1>Discover latest Rent <br/>
            available today
            </h1>
            </div>
           <div className="row m-5">
               {   
               
               house.map(house => <RentHouseDetail key={house.key} house={house}></RentHouseDetail>)
               
               }
           </div>

        </div>
    );
};

export default RentHouse;