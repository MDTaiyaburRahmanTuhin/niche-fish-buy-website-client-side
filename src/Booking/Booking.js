import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';
const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orderProdect/${serviceId}`)
            .then(res => res.json())
            .then((data) => setService(data))
    }, []);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user?.email;
        console.log(data);

        fetch("http://localhost:5000/myOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    }

    return (
        <div>
            <div className="row container">
                <div className="col-md-6">
                    <div className="card border-0 shadow">
                        <img src={service?.img} className="card-img-top img1" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{service?.name}</h5>
                            <p>{service?.description}</p>
                            <p className="card-text">{service?.price}</p>
                            <br />
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='p-3 m-3 w-50' {...register("name", { required: true, maxLength: 20 })} defaultValue={service?.name} placeholder='Name' />
                        <br />
                        <input className='p-3 m-3  w-50' {...register("description",)} defaultValue={service?.description} placeholder='Description' />
                        <br />
                        <input className='p-3 m-3  w-50' type="number" {...register("price")} defaultValue={service?.price} placeholder='Price' />
                        <br />
                        <input className='p-3 m-3  w-50' {...register("img",)} defaultValue={service?.img} placeholder='image url' />
                        <br />
                        <input type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Booking;