import React from 'react';
import {Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../assets/Img/Logo.svg';
//import {connect} from 'react-redux';
//import {entrou} from "../../store/actions/authAction";

class Entrar extends React.Component {
    state = {
        email: "",
        password: ""
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        //this.props.entrou(this.state);
    };
    render() {

        return (
            <div className="container box">
                <div className="row justify-content-center">
                    <div className="col-lg-4 p-5 caixalogin">
                        <div className="w-50 mb-3">
                            <img src={logo} alt={logo} className="logo"/>
                        </div>
                        <Form id="entrar" onSubmit={this.handleSubmit}>
                            <div className="welcome">
                    <span>
						Bem-Vindo Agente
                    </span>
                            </div>
                            <Form.Group className="input-field ">
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control type="email" id="email" placeholder="Email"
                                              onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group className="input-field ">
                                <Form.Label htmlFor="password">Palavra-Passe</Form.Label>
                                <Form.Control  type="password" id="password" placeholder="Palavra-Passe"
                                               onChange={this.handleChange}/>
                            </Form.Group>
                            <div className="text-right">
                                <button className="btn" type="submit">
                                    Entrar
                                </button>
                            </div>
                            <div>
                                <Link className="text-decoration-none text-light" to='/'>
                                    <span className="back">Voltar atrás</span>
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Entrar;