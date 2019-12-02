import React from 'react';
import {Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createUtilizador } from '../actions/utiAction';

const cod_s = "0aa0";

class Registo extends React.Component {
    state = {
        nomeAgente: "",
        codAgente: "",
        email: "",
        password: "",
        codsecreto: ""
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (cod_s === this.codigo.value) {
            this.props.createUtilizador(this.state)
        } else {
            alert("CÓDIGO ERRADO! ESTAMOS DE OLHO EM TI!");
            console.log("erro");
        }
        //console.log(this.state);
        //o this.state é o estado em cima
    };

    render() {
        return (
            <div className="container noscroll box">
                <div className="row justify-content-center">
                    <div className="col-6 p-5 caixalogin ">
                        <Form className="text-left" onSubmit={this.handleSubmit}>
                            <div className="welcome">
                    <span>
						Dados de Agente
                    </span>
                            </div>
                            <div className="row d-flex flex-row justify-content-center">
                                <div className="col-5">
                                    <Form.Group className="input-field">
                                        <Form.Label htmlFor="pnome">Nome de Agente</Form.Label>
                                        <Form.Control type="text" id="nomeAgente" placeholder="Nome de Agente"
                                                      onChange={this.handleChange}/>
                                    </Form.Group>

                                    <Form.Group className="input-field">
                                        <Form.Label htmlFor="snome">Código de Agente</Form.Label>
                                        <Form.Control type="text" id="codAgente" placeholder="Código de Agente"
                                                      onChange={this.handleChange}/>
                                    </Form.Group>
                                    <Form.Group className="input-field">
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                        <Form.Control type="email" id="email" placeholder="Email"
                                                      onChange={this.handleChange}/>
                                    </Form.Group>
                                </div>
                                <div className="col-5">
                                    <Form.Group className="input-field">
                                        <Form.Label htmlFor="password">Palavra-Passe</Form.Label>
                                        <Form.Control type="password" id="password" placeholder="Palavra-Passe"
                                                      onChange={this.handleChange}/>
                                    </Form.Group>
                                    <Form.Group className="input-field">
                                        <Form.Label htmlFor="password">Código Secreto</Form.Label>
                                        <Form.Control type="password" id="codsecreto" ref={(c) => {
                                            this.codigo = c
                                        }} placeholder="Código Secreto" onChange={this.handleChange}/>
                                    </Form.Group>
                                    <div className="text-right">
                                        <button className="btn" type="submit">
                                            Entrar
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <Link className="text-decoration-none text-light" to='/'>
                                            <span className="back">Voltar atrás</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUtilizador: (utilizador) => dispatch(createUtilizador(utilizador))
    }
};


export default connect(null, mapDispatchToProps)(Registo);