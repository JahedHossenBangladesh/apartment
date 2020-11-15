import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './RentHouseDetail.css';


const RentHouseDetail = ({house}) => {
    return (
      <>
    
        <div className="col-md-4" >
        <CardGroup  style={{ display:"flex", border:"none"}} >
        <Card style={{ border:"none" }} >
            <Card.Img variant="top" style={{ width: '18rem' }} src={house.img} className="center" />
           <div className="row p-5 pl-0">
              <div className="col-sm-8">
                 <h5 style={{paddingRight:"131px"}}>{house.price}</h5>
              </div>
              <div className="col-sm-4 ">
                <button className="ml-3"> {house.btn} </button>
              {/* <Card.Footer style={{ border:"none" }}  >
            <Button  variant="primary" size="lg" style={{ width: '8rem',border:"none" }}  block>
            {house.btn}
          </Button>
            </Card.Footer> */}
              </div>

            </div>
          
          </Card>
        </CardGroup>
        </div>
           {/* onClick={() => handleBook(props.event.btn)}  */}
          
         </>

    );
};

export default RentHouseDetail;