import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Home/Home/Sheard/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError, isLoading } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <h2>Login</h2>

            <form onSubmit={handleLoginSubmit}>

                <Form.Control className='w-50 m-5 '
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    placeholder="Enter email" />
                <Form.Control className='w-50 m-5'
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    placeholder="Password" />

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <NavLink to="/register">
                    <p>New User? Pleace  Register</p>
                </NavLink>
                {isLoading && <Spinner animation="border" role="status"></Spinner>}
                {user?.email && <Alert>User Created successfully!</Alert>}
                {authError && <Alert>{authError}</Alert>}
            </form>
        </div>
    );
};

export default Login;