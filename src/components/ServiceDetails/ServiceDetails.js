import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [details, setDetails] = useState([]);
    useEffect( () => {
        fetch(`services.json.${serviceId}`)
        .then(res => res.json())
        .then(data => {
            console.log('From Service',data);
            setDetails(data);
        })
    },[])
    return (
        <div>
            <h1>This is Service Details Page, Service ID = {serviceId}</h1>
            {
                details.map((n) => <h1>{n.name}</h1>)
            }
            
        </div>
    );
};

export default ServiceDetails;