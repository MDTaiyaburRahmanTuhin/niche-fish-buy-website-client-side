import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (

        <div className="card border-0 shadow ">
            <img src={img} className="card-img-top img-w" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>{description}</p>
                <p className="card-text">{price}</p>
                <br />
                <Link to={`/booking/${service._id}`}>
                    <Button className='btn'>Oder Now</Button>
                </Link>
            </div>
        </div>

    );
};

export default Service;