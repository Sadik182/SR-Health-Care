import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h1>This is Service Details Page, Service ID = {serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;