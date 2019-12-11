import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';


function Entrar (props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEntrar = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then( () => {
            props.history.push('/')
        })
            .catch(err => console.log(err))
    };

        return (
            <div className="container noscroll box">
                <div className="row justify-content-center">
                    <div className="col-lg-5 p-5 caixalogin">
                        <Form id="entrar" onSubmit={e => e.preventDefault() && false}>
                            <div className="welcome">
                    <span>
						Bem-Vindo Agente
                    </span>
                            </div>
                            <Form.Group className="input-field ">
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="input-field ">
                                <Form.Label htmlFor="password">Palavra-Passe</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="password"
                                    placeholder="Palavra-Passe"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>

                            <div className="text-right">
                                <button className="btn"
                                        type="submit"
                                        onClick={handleEntrar}>
                                    Entrar
                                </button>
                            </div>
                            <div className="text-danger text-center">
                            </div>
                            <div>
                                <Link className="text-decoration-none text-light" to='/registar'>
                                    <span className="back">Ir para o Registo</span>
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );

    }

    export default Entrar;