import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../assets/Img/Logo.svg'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {sair} from './actions/authActions';

function NavBar(props) {
    /* const nomeA = {
         borderRadius: "10px",
         backgroundColor: "#072938",
         fontFamily: "Roboto, sans-serif",
         textTransform: "uppercase"
     };*/
    const { auth, profile } = props;
    console.log(auth);
    //profile serve para conseguirmos aceder ao objeto de autenticação que tem as informações do doc do utilizador que
    //está logado  {profile.codAgente}
    // links são true ou seja, existe login feito
    return (
        <Navbar className="navbar" expand="sm">
            <Navbar.Brand>
                <Link to='/'>
                    <img src={logo} width={60} height={60}/>
                </Link>
            </Navbar.Brand>
            <Navbar id="basic-navbar-nav">
                <Nav className="justify-content-center">
                    { auth.uid ?
                    <Nav.Item className="navitem mr-2 pl-2 pr-2 text-dark">Agente {profile.codAgente}</Nav.Item> : null }
                    <Link to='/entrar'>
                        { !auth.uid ?
                            <Nav.Item className="navitem mr-2 pl-2 pr-2">Entrar</Nav.Item> : null }
                    </Link>
                    <Link to='/registar'>
                        { !auth.uid ?
                        <Nav.Item className="navitem mr-2 pl-2 pr-2">Registar</Nav.Item> : null }
                    </Link>
                    <Link to='/main'>
                    { auth.uid ?
                        <Nav.Item className="navitem mr-2 pl-2 pr-2">
                            Universos
                        </Nav.Item> : null }
                    </Link>
                    {/*caso o currentUser não for null é mostrado o botão de "Sair"*/}
                    <Link to='/'>
                    { auth.uid ?
                        <Nav.Item className="navitem mr-2 pl-2 pr-2" onClick={props.sair}>
                            Sair
                        </Nav.Item> : null }
                    </Link>
                </Nav>
            </Navbar>
        </Navbar>
    );
}

//vamos buscar o estado para saber se o utilizador fez login ou não e para receber os dados do objeto de autenticação
const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
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