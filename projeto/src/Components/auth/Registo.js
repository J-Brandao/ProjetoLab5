import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import { auth } from "../config/firebase";

function Registo (props) {

    const cod_secreto = '0ss0';
    const [name, setName] = useState('');
    const [codA, setCodA] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [codS, setCodS] = useState('');

    const handleRegistar = (e) => {
        e.preventDefault();

        if (codS === cod_secreto) {
            auth.createUserWithEmailAndPassword(email, password)
                .then(props.history.push('/entrar'))
                .catch(err => console.log(err))
        }else {
            alert('Código Secreto errado. Estamos de olho em si.')
        }
    };

    return (
            <div className="container noscroll box">
                <div className="row justify-content-center">
                    <div className="col-lg-5 p-5 caixalogin">
                        <Form onSubmit={e => e.preventDefault() && false }>
                            <div className="welcome">
                    <span>
						Preencha os dados
                    </span>
                            </div>
                            <Form.Group className="input-field">
                                <Form.Label htmlFor="name">Nome de Agente</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="name"
                                    value={name}
                                    placeholder="Nome de Agente"
                                    onChange={e => setName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="input-field">
                                <Form.Label htmlFor="codA">Código de Agente</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="codA"
                                    value={codA}
                                    placeholder="Código de Agente"
                                    onChange={e => setCodA(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="input-field">
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={e => setEmail(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="input-field">
                                <Form.Label htmlFor="password">Palavra-Passe</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="password"
                                    value={password}
                                    placeholder="Palavra-Passe"
                                    onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="input-field">
                                <Form.Label htmlFor="codS">Código Secreto</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="codS"
                                    value={codS}
                                    placeholder="Código Secreto"
                                    onChange={e => setCodS(e.target.value)}/>
                            </Form.Group>
                            <div className="text-right">
                                <button className="btn"
                                        type="submit"
                                        onClick={handleRegistar}>
                                    Registar
                                </button>
                            </div>
                            <div>
                                <Link className="text-decoration-none text-light" to='/entrar'>
                                    <span className="back">Voltar para a Página Inicial</span>
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
}


export default withRouter(Registo);