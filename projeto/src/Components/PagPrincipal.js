import React from 'react';
//import {Link} from 'react-router-dom';
import logo from '../assets/Img/Logo.svg';
import '../PagPrinc.css';

class PagPrincipal extends React.Component {
    render() {
        return (
            <div className="mt-4 container container-fluid boxp">
                <div className="row justify-content-center">
                    <div className="col-lg-5 p-5 caixalogin">
                        <div className="w-50 mb-3">
                            <img src={logo} alt={logo} className="logo"/>
                        </div>
                        <div className="welcome">
                            <h3>Serviços Secretos</h3>
                        </div>
                        <div>
                            <p className="text-center">O Lorem Ipsum é um texto modelo da indústria tipográfica e de
                                impressão.
                                O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de
                                1500,
                                quando uma misturou os caracteres de um texto para criar um espécime de livro.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PagPrincipal;