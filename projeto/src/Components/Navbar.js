import React from 'react';
import {Navbar} from 'react-bootstrap';
import logo from '../assets/Img/Logo.svg'
function NavBar() {


    return (
        <Navbar className=" nav-bg">
            <Navbar.Brand href="#"><img
                src={logo}
                width="55"
                height="55"
                className="d-inline-block align-top ml-5"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Navbar.Text>
                <span className={"title-font nav-text text-white text-align-center"}>Agente X</span>
            </Navbar.Text>
            <Navbar.Text >
                <a className={"title-font nav-text text-white nav-right"} href={"#"}>Sair</a>
            </Navbar.Text>
        </Navbar>

    );
}

export default NavBar;