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
import AddReview from '../AddReview/AddReview';
import Myorder from '../Myorder/Myorder';
import Payment from '../Payment/Payment';


const Admin = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();
    return (
        <div>
            <Navigation></Navigation>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="admin-area p-1">
                        <h6>Dashboard</h6>
                        <Link to={`${url}/addreview`}><Button>AddReview</Button></Link>
                        <Link to={`${url}/myorder`}><Button>My Order</Button></Link>
                        <Link to={`${url}/pyment`}><Button>Payment</Button></Link>
                        <Button onClick={logOut} variant="light">Logout</Button>

                        {admin && <div>
                            <Link to={`${url}/makeAdmin`}><Button>Make Admin</Button></Link>
                            <Link to={`${url}/addservice`}><Button>Add Service</Button></Link>
                            <Link to={`${url}/allOrders`}><Button>All Orders</Button></Link>

                        </div>}
                    </div>
                </div>
                <div className='col-md-9'>
                    <Switch>
                        <Route exact path={`${path}/addservice`}>
                            <Addservices></Addservices>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/allOrders`}>
                            <AllOrders></AllOrders>
                        </Route>
                        <Route path={`${path}/addreview`}>
                            <AddReview></AddReview>
                        </Route>
                        <Route path={`${path}/myorder`}>
                            <Myorder></Myorder>
                        </Route>
                        <Route path={`${path}/pyment`}>
                            <Payment></Payment>
                        </Route>
                    </Switch>
                </div>

            </div>
        </div>
    );
};

export default Admin;