import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../assets/Img/Logo.svg'
import {Link} from 'react-router-dom';
import { auth } from './config/firebase';
import { connect } from 'react-redux';

function NavBar ({currentUser}) {
    const nomeA = {
        borderRadius: "10px",
        backgroundColor: "#072938",
        fontFamily: "Roboto, sans-serif",
        textTransform: "uppercase"
    };

    return (
        <Navbar className="navbar" expand="sm">
            <Navbar.Brand>
                <Link to='/dashboard'>
                <img src={logo} width={60} height={60}/>
                </Link>
            </Navbar.Brand>
            <Navbar id="basic-navbar-nav">
                <Nav className="justify-content-center">
                    <Nav.Item className="mr-2 pl-2 pr-2" style={nomeA}>Agente X</Nav.Item>
                    {/*caso o currentUser não for null é mostrado o botão de "Sair"*/}
                    { currentUser && currentUser ? <Nav.Item className="ml-2"
                    onClick={() => auth.signOut()}>
                        Sair
                    </Nav.Item> : null}
                </Nav>
            </Navbar>
        </Navbar>
    );
};

const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(NavBar);

/*<nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm">
            <Link to='/' className="navbar-brand">
            <img src={logo} alt={logo} width={60} height={60}/>
            </Link>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link"></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Entrar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Sair</a>
                    </li>
                </ul>
            </div>
        </nav>*/