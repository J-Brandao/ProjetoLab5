import React from 'react';
import {Link} from 'react-router-dom'
import{check_image} from "./HeroDetails";


const HeroList = ({herois, pesquisa}) => {
    console.log(pesquisa);
    if (pesquisa === "") {
        return (
            <div className="section">
                {herois && herois.map(herois => {
                    console.log(herois.image.url);
                    var str= herois.biography.publisher;
                    var lastIndex = str.lastIndexOf(" ");
                    str = str.substring(0, lastIndex);
                    //console.log(herois.id);
                    const estilo = {
                        width: "200px",
                        height: "200px",
                        padding: 0,
                        margin: "10px",
                        border: "none",
                        backgroundImage: `url(${check_image(herois.image.url)})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        borderRadius: "5px",
                        color: "white",
                        fontStyle: "Titles"
                    };
                    return (
                        <Link to={`/${str}/${herois.id}`}>
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
                    var str= herois.biography.publisher;
                    var lastIndex = str.lastIndexOf(" ");
                    str = str.substring(0, lastIndex);
                    let nomes = herois.name.toLowerCase();
                    if (herois.name.startsWith(pesquisa) || nomes.startsWith(pesquisa)) {

                        //console.log(herois.id);
                        const estilo = {
                            width: "200px",
                            height: "200px",
                            padding: 0,
                            margin: "10px",
                            border: "none",
                            backgroundImage: `url(${check_image(herois.image.url)})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            borderRadius: "5px",
                            color: "white",
                            fontStyle: "Titles"
                        };
                        return (
                            <Link to={`/${str}/${herois.id}`}>
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