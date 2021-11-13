import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://ancient-sea-96085.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2>services</h2>
            <div className="container">
                <div className="row">
                    {
                        services.map(service => (
                            <div className='col-lg-4 col-md-6 col-12 mb-4'>
                                <Service
                                    key={service._id}
                                    service={service}
                                ></Service>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;