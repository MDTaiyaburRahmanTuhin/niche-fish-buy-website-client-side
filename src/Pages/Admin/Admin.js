import React from 'react';
import Navigation from '../Home/Home/Sheard/Navigation/Navigation';
import './Admin.css'
const Admin = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h2>This is admin</h2>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="admin-area p-1">
                        <h6>Dashboard</h6>
                    </div>
                </div>
                <div className='col-md-9'>

                </div>

            </div>
        </div>
    );
};

export default Admin;