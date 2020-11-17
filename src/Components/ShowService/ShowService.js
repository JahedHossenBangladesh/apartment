import React from 'react';
import './ShowServices.scss'

const ShowServices = ({data}) => {
    return (
        <div className="col-md-4 col-sm-6 my-3 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
                <img style={{ width: "50px" }} className="card-img-top align-self-center" src={data.img} />
                <div className="card-body text-center">
                    <h5 style={{ fontWeight: "600" }} className="card-title">{data.title}</h5>
                    <p className="card-text text-secondary">{data.des}</p>
                </div>
            </div>
    </div>
    );
};

export default ShowServices;