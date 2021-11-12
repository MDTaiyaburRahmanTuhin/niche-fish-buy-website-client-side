import React from 'react';
import Navigation from '../Home/Home/Sheard/Navigation/Navigation';
import './Admin.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from 'react-bootstrap';
import Addservices from '../Addservices/Addservices';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';
import AllOrders from '../AllOrders/AllOrders';


const Admin = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    return (
        <div>
            <Navigation></Navigation>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="admin-area p-1">
                        <h6>Dashboard</h6>
                        <Link to={`${url}`}><Button>Add Service</Button></Link>
                        {admin && <div>
                            <Link to={`${url}/makeAdmin`}><Button>Make Admin</Button></Link>
                            <Link to={`${url}/addDoctor`}><Button>Add Doctor</Button></Link>
                            <Link to={`${url}/allOrders`}><Button>All Orders</Button></Link>
                        </div>}
                    </div>
                </div>
                <div className='col-md-9'>
                    <Switch>
                        <Route exact path={path}>
                            <Addservices></Addservices>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/allOrders`}>
                            <AllOrders></AllOrders>
                        </Route>
                    </Switch>
                </div>

            </div>
        </div>
    );
};

export default Admin;