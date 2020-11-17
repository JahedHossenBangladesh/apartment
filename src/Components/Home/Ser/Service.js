import React, { useState } from 'react';
import ShowService from './Service'


const Service= [
    {
        id: 0,
        img: "https://i.ibb.co/h7mPW8Y/apartment-1.png",
        title: "Wide Range of Properties",
        des: "With a robust selection of popular properties on hand, as well as leading properties from experts."

    },
    {
        id: 1,
        img: "https://i.ibb.co/mbdYvds/affordable-1.png",
        title: "Financing Made Easy",
        des: "Our stress-free finance department that can find financial solutions to save you money."
    },
    {
        id: 2,
        img: "https://i.ibb.co/J5wt4TY/lessee-1.png",
        title: "Trusted by Thousands",
        des: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users."
    }
]



const Service = () => {

    const [data, setData] = useState(services)
    console.log(data);
    return (
        <div>
            <section className="service">
                <div className="container">
                    <h4 className="mt-5 text-center"> <span style={{ color: '#275A53' }}>Service</span></h4>
                    <h1 className="mt-5 text-center" style={{ color: '#275A53' }}>We're an agency tailored to all <br/> clients' needs that always delivers</h1>
                    <div className="row"> 
                    
                        {
                            data.map(data => <ShowService key={data._id} data={data}></ShowService>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;