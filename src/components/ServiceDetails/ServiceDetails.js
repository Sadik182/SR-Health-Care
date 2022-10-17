import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const {services} = useAuth();
    

    const matchedService = services.find((service) => service.sId === Number(serviceId));
    console.log(matchedService);

    return (
        <div>
            <h1>This is Service Details Page, Service ID = {serviceId}</h1>
            
            
        </div>
    );
};

export default ServiceDetails;