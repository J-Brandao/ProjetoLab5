import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagem from "../85.jpg";
import './Rangel.css';

function HeroDetails({match}) {

    useEffect(() => {
        pesquisa();
        console.log(match);
    }, []);

    const [item, setItem] = useState({});

    const nomeA = {
        fontFamily: "Roboto, sans-serif",
    };

    const pesquisa = async () => {
        const pesquisa1 = await fetch(`2443642102517801/123`);
        const resposta = await pesquisa1.json();
        setItem(resposta);
        console.log(resposta);
    };

    return (
        <div>
            <div className="container row">
                <div className="col-3 side">
                    <section className={"mt-4"}>
                        <img src={imagem} className="img-fluid"/>
                        <h1 className={"text-center title-font"}>IronMan</h1>
                    </section>
                </div>
                <div className="col-4 mt-3 row text-left">
                    <section className="col-6">
                        <h3 className="title-font">Nome</h3>
                        <h5 style={nomeA}>Toninho Stark</h5>
                    </section>
                    <section className="col-6">
                        <h3 className="title-font">Editora</h3>
                        <h5 style={nomeA}>Marvel</h5>
                    </section>
                    <section className="col-6">
                        <h3 className="title-font">Aparência</h3>
                        <h5 style={nomeA}>Género: Male</h5>
                        <h5 style={nomeA}>Raça: Human</h5>
                        <h5 style={nomeA}>Altura: 198cm</h5>
                    </section>
                    <section className="col-6">
                        <h3 className="title-font">Outros nomes</h3>
                        <h5 className={"text-justify"} style={nomeA}>Iron Knight, Hogan Potts, Spare Parts Man, Cobalt Man II, Crimson Dynamo, Ironman</h5>
                    </section>
                    <section className="col-12">
                        <h3 className="title-font">Conexões</h3>
                        <h5 className={"text-justify"} style={nomeA}>Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.</h5>
                    </section>
                </div>
                <div className="col-5 mt-2">
                    <h1 className={"text-center title-font"}>Mais sobre o herói</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroDetails;