import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllOrders = () => {
    const [ordes, setOrders] = useState([]);
    const [status, setStatus] = useState("");
    const [conotrol, setConotrol] = useState(false)

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }
    console.log(status);
    useEffect(() => {
        fetch('https://ancient-sea-96085.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleUpdate = (id) => {
        fetch(`https://ancient-sea-96085.herokuapp.com/updateStatus/${id}`, {
            method: "put",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status })
        })
        console.log(id);
    }


    const handleDelete = (id) => {
        fetch(`https://ancient-sea-96085.herokuapp.com/deleteOrder/${id}`, {
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
            <h2>All orders{ordes.length}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Title</th>
                        <th>Event description</th>
                        <th>Image Link</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {ordes?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.description}</td>
                            <td>{pd.email}</td>
                            <td><input onChange={handleStatus} type='text' defaultValue={pd.status} /></td>
                            <button onClick={() => handleDelete(pd?._id)} className="btn bg-danger p-2">Delete</button>
                            <button onClick={() => handleUpdate(pd._id)} className="btn bg-success p-2">update</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default AllOrders;