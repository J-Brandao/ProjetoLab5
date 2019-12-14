import React from 'react';
import {Link} from 'react-router-dom'

const HeroList = ({herois, pesquisa}) => {
    console.log(pesquisa);
    if (pesquisa === "") {
        return (
            <div className="section">
                {herois && herois.map(herois => {
                    //console.log(herois.id);
                    const estilo = {
                        width: "200px",
                        height: "200px",
                        padding: 0,
                        margin: "10px",
                        border: "none",
                        backgroundImage: `url(${herois.image.url})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        borderRadius: "5px",
                        color: "white",
                        fontStyle: "Titles"
                    };
                    return (
                        <Link to={`/hero/${herois.id}`}>
                            <button value={herois.name} key={herois.id} className={"col-4 btn_list"} style={estilo}>
                                <span  className={"button_text title-font px-3"}>{herois.name}</span>
                            </button>
                        </Link>
                    )
                })}
            </div>
        )
    }
    else {
        return (
            <div className="section ml-4 mr-4">
                {herois && herois.map(herois => {
                    let nomes = herois.name.toLowerCase();
                    if (herois.name.startsWith(pesquisa) || nomes.startsWith(pesquisa)) {

                        //console.log(herois.id);
                        const estilo = {
                            width: "200px",
                            height: "200px",
                            padding: 0,
                            margin: "10px",
                            border: "none",
                            backgroundImage: `url(${herois.image.url})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            borderRadius: "5px",
                            color: "white",
                            fontStyle: "Titles"
                        };
                        return (
                            <Link to={`/hero/${herois.id}`}>
                                <button value={herois.name} key={herois.id} className={"btn_list"} style={estilo}>
                                    <span  className={"button_text title-font px-3"}>{herois.name}</span>
                                </button>
                            </Link>
                        )
                    }
                })}
            </div>
        )
    }
};

export default HeroList;