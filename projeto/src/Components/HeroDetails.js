import React, {useEffect, useState} from 'react';
import NavBar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import imagem from "../85.jpg";
import './Rangel.css';

function HeroDetails({match}) {

    useEffect(() => {
        pesquisa();
        console.log(match);
    }, []);

    const [item, setItem] = useState({});

    const pesquisa = async () => {
        const pesquisa = await fetch(`2443642102517801/123`);
        const resposta = await pesquisa.json();
        setItem(resposta);
        console.log(resposta);
    };

    return (
        <div>
            <NavBar/>
            <div className="container row">
                <div className="col-4 side">
                    <section className={"mt-4"}>
                        <img src={imagem} className="img-fluid"/>
                        <h1 className={"text-center title-font"}>IronMan</h1>
                    </section>
                </div>
                <div className="col-4 mt-4 row">
                    <section className="col-6">
                        <h3 className="title-font">Editora</h3>
                        <h5>Marvel</h5>
                    </section>
                    <section className="col-6">
                        <h3 className="title-font">Nome</h3>
                        <h5>Toninho Stark</h5>
                    </section>
                    <section className="col-12">
                        <h3 className="title-font">Aliases</h3>
                        <h5 >Iron Knight, Hogan Potts, Spare Parts Man, Cobalt Man II, Crimson Dynamo, Ironman</h5>
                    </section>
                    <section className="col-12">
                        <h3 className="title-font">Appearance</h3>
                        <h5 >Iron Knight, Hogan Potts, Spare Parts Man, Cobalt Man II, Crimson Dynamo, Ironman</h5>
                    </section>
                </div>
                <div className="col-4 mt-4">
                    <h1 className={"text-center"}>IronMan</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroDetails;