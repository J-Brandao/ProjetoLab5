import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagem from "../85.jpg";
import './Rangel.css';
import {getHerobyID} from "../utils/apiCalls";

function HeroDetails({match}) {
    useEffect(() => {
        fetch_hero();

    }, []);
    const [item, setItem] = useState({
        image:{},
        biography:{},
        appearance:{
            height:[],
            weight:[],
        },
    });


    console.log(match.params.id);
    const fetch_hero = async () => {
        await getHerobyID(match.params.id).then(res => {
            setItem(res.data);
            console.log(res.data);
        })
            .catch(error => {
                console.log(error);
            })
    };
const check_empty=(obj)=>{
    if(obj!==""&&obj!=="0 kg"&&obj!=="null"&&obj!=="0 cm"){
        return(obj);
    }else{
        return "?";
    }
};





    const nomeA = {
        fontFamily: "Roboto, sans-serif",
    };



    return (
        <div>
            <div className="container row">
                <div className="col-3 side">
                    <section className={"mt-4"}>
                        <img src={item.image.url} className={"img-fluid"}/>
                        <h1 className={"text-center title-font"}>{item.name}</h1>
                    </section>
                </div>
                <div className="col-4 mt-3 row text-left">
                    <section className="col-6">
                        <h3 className="title-font">Nome</h3>
                        <h5 style={nomeA}>{check_empty(item.biography["full-name"])}</h5>
                    </section>
                    <section className="col-6">
                        <h3 className="title-font">Universo</h3>
                        <h5 style={nomeA}>{item.biography["publisher"]}</h5>
                    </section>
                    <section className="col-6">
                        <h3 className="title-font">Informações Gerais</h3>
                        <h5 style={nomeA}>Género: {check_empty(item.appearance["gender"])}</h5>
                        <h5 style={nomeA}>Raça: {check_empty(item.appearance["race"])}</h5>
                        <h5 style={nomeA}>Altura: {check_empty(item.appearance.height[1])}</h5>
                        <h5 style={nomeA}>Peso: {check_empty(item.appearance.weight[1])}</h5>
                    </section>
                    <section className="col-6">
                        <h3 className="title-font">Outros nomes</h3>
                        <h5 className={"text-justify"} style={nomeA}>Iron Knight, Hogan Potts, Spare Parts Man, Cobalt
                            Man II, Crimson Dynamo, Ironman</h5>
                    </section>
                    <section className="col-12">
                        <h3 className="title-font">Conexões</h3>
                        <h5 className={"text-justify"} style={nomeA}>Avengers, Illuminati, Stark Resilient; formerly
                            S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New
                            Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States
                            Department of Defense.</h5>
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