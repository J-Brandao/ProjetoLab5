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
        codS: "",
        erro: "",
        persVistos: [],

    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    componentDidUpdate () {
        const {auth} = this.props;
        //console.log("está a ser chamado");
        if (auth.uid) {
            //console.log("aconteceu");
            this.props.history.push('/')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {nomeAgente, codAgente, email, password, codS} = this.state;
        if (!nomeAgente || !codAgente || !email || !password || !codS) {
            this.setState({ erro: "Preencha todos os dados para se Registar" });
            console.log("inputs vazios");
        } else {
            try {
                //verifica se o campo não está vazio e se o código é igual ao código secreto
                if (this.codigo.value !== null) {
                    if (this.codigo.value === cod_s) {
                        this.props.Registar(this.state);
                }
                else {
                        this.setState({ erro: "O Código Secreto encontra-se errado. Neste momento é um alvo a abater." });
                    }
            }
        } catch (err){
            console.log(err);
            }
        }
    };

    render() {
        const {authError} = this.props;

        return (
            <div className="container noscroll box">
                <div className="row justify-content-center">
                    <div className="col-lg-5 mt-5 p-5 caixalogin">
                        <Form onSubmit={this.handleSubmit}>
                            <div className="welcome mb-2">
                                <span>Preencha os dados</span>
                            </div>
                            <div className="erro text-center text-danger font-weight-bold">
                                {authError ? <p>{authError}</p> : null}
                                {this.state.erro && <p>{this.state.erro}</p>}
                            </div>
                            <div className="row">
                                <div className="col-6">
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
                                </div>
                                <div className="col-6">
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
                                </div>
                            </div>
                            <div className="text-left mt-2">
                                <Link className="text-decoration-none text-light" to='/'>
                                    <span className="back">Voltar para o Início</span>
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        Registar: (newUser) => dispatch(Registar(newUser))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Registo);