import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Search.css'
const Search = () => {
    return (
        <>   
        <div className="banner">
            <div className="bannerContent">
                <h1>Find Your House Rent</h1>
                <Form className="d-flex">
                <FormControl type="text" placeholder="Search" className="searchField" />
                <Button className="searchBtn">Search</Button>
                </Form>
            </div>
        </div>
        </>
     
    );
};

export default Search;