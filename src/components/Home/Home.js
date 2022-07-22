import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-warning fw-bold my-4">Medical Services</h1>
            <Services></Services>
        </div>
    );
};

export default Home;