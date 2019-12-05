import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';


function Dashboard () {

    return (
        <div>
            <Navbar/>
            <div>
                HOME PAGE WITH LOGIN
            </div>
        </div>
    );
};

const mapStateToProps = (state)=> ({
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Dashboard);