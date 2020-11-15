import React from 'react';
import RentHouse from '../../RentHouse/RentHouse';

import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search';
const Home = () => {
    return (
        <>
       
      <Navbar></Navbar>
      <Search></Search>
      <RentHouse></RentHouse>
        </>
    );
};

export default Home;