import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Home/Home/Sheard/Navigation/Navigation';

const Myorder = () => {
    const { user } = useAuth();
    const email = user?.email;
    const [order, setOrder] = useState([]);
    const [conotrol, setConotrol] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then((data) => setOrder(data));
    }, [conotrol])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setConotrol(!conotrol)
                }
                console.log(data)
            });
    }
    return (
        <div>
            <Navigation></Navigation>
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
                            <p>status {pd?.status}</p>
                            <Button onClick={() => handleDelete(pd?._id)}>Delet</Button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Myorder;