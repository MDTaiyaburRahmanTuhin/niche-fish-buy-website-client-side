import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Myorder = () => {
    const { user } = useAuth();
    const email = user?.email;
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then((data) => setOrder(data));
    }, [order])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then((data) => console.log(data));
    }
    return (
        <div>
            <h2>This is order</h2>
            <div className='row container'>
                {order?.map((pd) => (
                    <div className="col-md-4">
                        <div className="service border border p-3">
                            <div className="services-img ">
                                <img className="w-100" src={pd?.image} alt="" />
                            </div>

                            <h6>{pd?.name}</h6>
                            <h4>{pd?.model}</h4>
                            <p>{pd?.description}</p>
                            <h3> price{pd?.price}</h3>
                            <Button onClick={() => handleDelete(pd?._id)}>Delet</Button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Myorder;