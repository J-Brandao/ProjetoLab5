import React from 'react';
import {Form} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { Registar } from '../actions/authActions';

const cod_s = "pedro";

class Registo extends React.Component {
    state = {
        nomeAgente: "",
        codAgente: "",
        email: "",
        password: "",
        codS: ""
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (cod_s === this.codigo.value) {
            //representa o novo utilizador que está a ser passado no dispatch
            this.props.Registar(this.state);
        } else {
            alert("CÓDIGO ERRADO! ESTAMOS DE OLHO EM TI!");
            console.log("erro");
        }
    };

    render() {
        //const { auth, authError } = this.props;

        return (
            <div className="container noscroll box">
                <div className="row justify-content-center">
                    <div className="col-lg-5 p-5 caixalogin">
                        <Form onSubmit={this.handleSubmit}>
                            <div className="welcome mb-2">
                    <span>
						Preencha os dados
                    </span></div>
                            <Form.Group className="input-field">
                                <Form.Label htmlFor="name">Nome de Agente</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="nomeAgente"
                                    placeholder="Nome de Agente"
                                    onChange={this.handleChange}/>
                            </Form.Group>

                            <Form.Group className="input-field">
                                <Form.Label htmlFor="codA">Código de Agente</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="codAgente"

                                    placeholder="Código de Agente"
                                    onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group className="input-field">
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="email"

                                    placeholder="Email"
                                    onChange={this.handleChange}/>
                            </Form.Group>

                            <Form.Group className="input-field">
                                <Form.Label htmlFor="password">Palavra-Passe</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="password"

                                    placeholder="Palavra-Passe"
                                    onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group className="input-field">
                                <Form.Label htmlFor="codS">Código Secreto</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="codS"
                                    placeholder="Código Secreto"
                                    ref={(c) => {
                                        this.codigo = c
                                    }}
                                    onChange={this.handleChange}/>
                            </Form.Group>
                            <div className="text-right">
                                <button className="btn"
                                        type="submit">
                                    Registar
                                </button>
                            </div>
                            <div>
                                <Link className="text-decoration-none text-light" to='/'>
                                    <span className="back">Voltar para a Página Inicial</span>
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        Registar: (newUser) => dispatch(Registar(newUser))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Registo);