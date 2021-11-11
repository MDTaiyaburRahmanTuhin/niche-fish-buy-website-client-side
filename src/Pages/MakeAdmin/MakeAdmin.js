import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <Form.Control className='w-50 m-5 '
                    type="email"
                    placeholder="Enter email"
                    onBlur={handleOnBlur}
                />

                <Button type='submit'>Make Admin</Button>
            </form>
            {success && <Alert>Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;