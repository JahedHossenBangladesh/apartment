import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Search.css'
const Search = () => {
    return (
        <>   
            <div className="image">
          
        <div style={{paddingTop:"300px", textAlign:"center",paddingLeft:"400px"}}>
        <h1 style={{color:"white" ,paddingLeft:"-200px" }}>Find Your House Rent</h1>
        <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
    </div>
        </div>
        </>
     
    );
};

export default Search;