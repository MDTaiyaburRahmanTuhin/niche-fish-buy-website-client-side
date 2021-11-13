import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';
import Navigation from '../Pages/Home/Home/Sheard/Navigation/Navigation';
const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`https://ancient-sea-96085.herokuapp.com/orderProdect/${serviceId}`)
            .then(res => res.json())
            .then((data) => {
                setService(data)
                reset(data);
            })
    }, [reset]);

    const onSubmit = data => {
        data.email = user?.email;
        data.status = 'pending';
        console.log(data);
        delete data._id
        fetch("https://ancient-sea-96085.herokuapp.com/myOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(result => {
                console.log(result)

            });
        console.log(data);
    }

    return (
        <div>
            <Navigation></Navigation>
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
                        <input
                            {...register("name")}
                            defaultValue={service?.name}
                            className="p-2 m-2 w-100"
                        />
                        <br />
                        <input
                            {...register("text")}
                            defaultValue={service?.price}
                            className="p-2 m-2 w-100"
                        />
                        <br />
                        <input
                            {...register("price", { required: true })}
                            defaultValue={service?.img}
                            className="p-2 m-2"
                            className="p-2 m-2 w-100"
                        />
                        <br />
                        <br />
                        <input
                            {...register("image", { required: true })}
                            defaultValue={service?.description}
                            className="p-2 m-2"
                            className="p-2 m-2 w-100"
                        />
                        <br />
                        <input type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Booking;