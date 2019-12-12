import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../assets/Img/Logo.svg'
import {Link} from 'react-router-dom';
import {auth} from './config/firebase';
import {connect} from 'react-redux';
import {sair} from './actions/authActions';

function NavBar(props) {
    /* const nomeA = {
         borderRadius: "10px",
         backgroundColor: "#072938",
         fontFamily: "Roboto, sans-serif",
         textTransform: "uppercase"
     };*/
    const { auth } = props;
    //console.log(auth);
    // links são true ou seja, existe login feito
    return (
        <Navbar className="navbar" expand="sm">
            <Navbar.Brand>
                <Link to='/dashboard'>
                    <img src={logo} width={60} height={60}/>
                </Link>
            </Navbar.Brand>
            <Navbar id="basic-navbar-nav">
                <Nav className="justify-content-center">
                    { auth.uid ?
                    <Nav.Item className="mr-2 pl-2 pr-2 text-dark">Agente X</Nav.Item> : null }
                    <Link to='/entrar'>
                        { !auth.uid ?
                            <Nav.Item className="mr-2 pl-2 pr-2">Entrar</Nav.Item> : null }
                    </Link>
                    <Link to='/registar'>
                        { !auth.uid ?
                        <Nav.Item className="mr-2 pl-2 pr-2">Registar</Nav.Item> : null }
                    </Link>
                    {/*caso o currentUser não for null é mostrado o botão de "Sair"*/}
                    { auth.uid ?
                        <Nav.Item className="text-dark mr-2 pl-2 pr-2" onClick={props.sair}>
                            Sair
                        </Nav.Item> : null }
                </Nav>
            </Navbar>
        </Navbar>
    );
}

//vamos buscar o estado para saber se o utilizador fez login ou não
const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sair: () => dispatch(sair())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

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