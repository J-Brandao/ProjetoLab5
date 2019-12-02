import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../assets/Img/Logo.svg'
import {Link} from 'react-router-dom';

function NavBar() {
    const nomeA = {
        borderRadius: "10px",
        backgroundColor: "#072938",
        fontFamily: "Roboto, sans-serif",
        textTransform: "uppercase"
    };
    return (
        <Navbar className="navbar" expand="sm">
            <Navbar.Brand>
                <Link to='/'>
                <img src={logo} width={60} height={60}/>
                </Link>
            </Navbar.Brand>
            <Navbar id="basic-navbar-nav">
                <Nav className="justify-content-center">
                    <Nav.Item className="mr-2 pl-2 pr-2" style={nomeA}>Agente X</Nav.Item>
                    <Link className="text-decoration-none text-light" to='/entrar'>
                    <Nav.Item className="menu mr-2 ml-2">Entrar</Nav.Item>
                    </Link>
                    <Link className="text-decoration-none text-light" to='/registar'>
                    <Nav.Item className="ml-2 mr-2">Registo</Nav.Item>
                    </Link>
                    <Nav.Item className="ml-2">Sair</Nav.Item>
                </Nav>
            </Navbar>
        </Navbar>
    );
}

export default NavBar;

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