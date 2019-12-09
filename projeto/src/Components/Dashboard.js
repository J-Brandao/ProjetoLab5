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

// existe essa conexão  do mapStateToProps porque assim passamos o estado da store, ou seja, se o utilizador está logado ou não
const mapStateToProps = (state)=> ({
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Dashboard);