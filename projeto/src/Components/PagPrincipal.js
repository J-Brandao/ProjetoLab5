import React from 'react';
import '../PagPrinc.css';


class PagPrincipal extends React.Component {
    render() {
        return (
            <div className="mt-4 noscroll container container-fluid box">
                <div className="row justify-content-center">
                    <div className="col-lg-5 p-5 caixalogin">
                        <div className="justify-content-center">
                            <div className="welcome">
                                <h3>F.S.S.U.P</h3>
                            </div>
                            <div>
                                <p className="texto">É uma super organização, muito mais forte e importante do que
                                    qualquer
                                    outra (CIA, NSA, FBI, etc). Com uma mega base invisível e flutuante, liderada por
                                    Jeff Fury,
                                    cuida dos interesses de dois Universos, Marvel e DC. Ainda trabalha em conjunto com
                                    os heróis
                                    (em especial a Liga Vingadora) nas suas missões, além de ser considerada a "última
                                    defesa
                                    dos Universos" contra ameças superiores, como os Skrulls, a Hydra, Inumanos, Doutor
                                    Destino, Joker, Black Adam, Lex Luthor, etc. -
                                    <span className="text-uppercase font-weight-bold"> Força Secreta Suprema de Universos Paralelos
                                    </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PagPrincipal;