import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user?.email;
        console.log(data);
        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            <h2>Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <select {...register("review")} className='w-50'>
                    <option value="3.5">3.5</option>
                    <option value="4.5">4.5</option>
                    <option value="5">5</option>
                </select>
                <br />
                <input className='p-3 m-3  w-50' {...register("description",)} placeholder='Description' />
                <br />
                <input className='p-3 m-3  w-50' {...register("email",)} defaultValue={user.email} placeholder='Name' />
                <br />
                <input className='p-3 m-3  w-50' {...register("img",)} placeholder='image url' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;