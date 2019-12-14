import React from 'react';
import {Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../actions/authActions';


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
        this.props.login(this.state);
        //este console.log mostra o rertornado dos inputs
        console.log(this.state);
        const {email, password} = this.state;
        if (!email || !password) {
            //quando os inputs estão vazios
            console.log("inputs vazios");
        }

        //tentativa de navegação após as credenciais estarem corretas
        /*const {authError} = this.props;
        if (authError != null) {
            //nao dá para ver o console.log
            console.log(authError)
        } else {
            //this.props.history.push("/main");
        }*/
    };

    render() {
        //destruturação do objeto
        const {authError} = this.props;
        return (
            <div className="container noscroll box">
                <div className="row justify-content-center">
                    <div className="col-lg-5 p-5 caixalogin">
                        <Form id="entrar" onSubmit={this.handleSubmit}>
                            <div className="welcome mb-2">
                    <span>
						Bem-Vindo Agente
                    </span>
                            </div>
                            <div className="erro text-center text-danger font-weight-bold">
                                {authError ? <p>{authError}</p> : null}
                            </div>
                            <Form.Group className="input-field ">
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group className="input-field ">
                                <Form.Label htmlFor="password">Palavra-Passe</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="password"
                                    placeholder="Palavra-Passe"
                                    onChange={this.handleChange}/>
                            </Form.Group>

                            <div className="text-right">
                                <button className="btn"
                                        type="submit">
                                    Entrar
                                </button>
                            </div>
                            <div>
                                <Link className="text-decoration-none" to='/registar'>
                                    <span className="back">Ir para o Registo</span>
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Entrar);