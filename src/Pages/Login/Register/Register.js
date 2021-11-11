import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';

import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Home/Home/Sheard/Navigation/Navigation';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not mathe')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <h2>Register</h2>
            {!isLoading && <form onSubmit={handleLoginSubmit}>

                <Form.Control className='w-50 m-5 '
                    name="name"
                    onBlur={handleOnBlur}
                    placeholder="Your Name" />
                <Form.Control className='w-50 m-5 '
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    placeholder="Enter email" />
                <Form.Control className='w-50 m-5'
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    placeholder="Password" />
                <Form.Control className='w-50 m-5'
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    placeholder="Retype Password" />

                <Button variant="primary" type="submit">
                    Register
                </Button>
                <NavLink to="/login">
                    <p>Already Registered? Pleace  Login</p>
                </NavLink>

            </form>}
            {isLoading && <Spinner animation="border" role="status"></Spinner>}
            {user?.email && <Alert>User Created successfully!</Alert>}
            {authError && <Alert>{authError}</Alert>}
        </div>
    );
};

export default Register;