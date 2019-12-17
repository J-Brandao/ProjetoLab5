import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {getHerobyID, getYTVids_Origins} from "../utils/apiCalls";
import {Link} from 'react-router-dom';
import placeholder from '../assets/Img/question_mark.png';
import {connect} from 'react-redux';
import {encontrado} from "./actions/authActions";


export function check_image(obj) {
    console.log("yo");
    let img = new Image();
    img.src = obj;
    console.log(img.src);
    if (!img.complete) {
        return placeholder
    }
    else if (img.height === 0) {
        return placeholder
    } else {
        return obj;
    }


}

function HeroDetails(props) {
    console.log("ol");
    console.log(props);
    var str = props.match.url;
    var lastIndex = str.lastIndexOf("/");
    str = str.substring(0, lastIndex);
    console.log(str);

    useEffect(() => {
        console.log(props.match);
        let PR = new Promise(
            async (ok, nok) => {
                await getHerobyID(props.match.params.id).then(res => {
                    setItem(res.data);
                    console.log(res.data);

                    ok(res.data.name);

                })
                    .catch(error => {
                        console.log(error);
                        nok();
                    })

            });
        PR.then(fetch_video_origins , () => console.log("not OK"));
    }, []);


    const [item, setItem] = useState({
        image: {},
        biography: {
            aliases: [],
        },
        appearance: {
            height: [],
            weight: [],
        },
    });
    const [YTvid, setVid] = useState({
        id: "",
    });

    const [visitado, setVisitado] = useState("");


    const handleGuardar = (uid) => {
        console.log("clicou");


        props.encontrado({
            nome: item.name,
            imagem: item.image.url,
            id: item.id,

        }, uid, persVistos);


    };

    const fetch_video_origins = async (name) => {
        await getYTVids_Origins(name).then(res => {
            setVid(res.data.items[0].id.videoId);
            console.log(name);
            console.log(res.data.items[0].id.videoId);

        }).catch(error => {
            console.log(error);
        })
    };


    const check_empty = (obj) => {
        if (obj !== "" && obj !== "0 kg" && obj !== "null" && obj !== "0 cm") {
            return (obj);
        } else {
            return "?";
        }
    };
    const check_array_empty = (obj) => {
        if (obj !== "-") {
            return (obj);
        } else {
            return "?";
        }
    };
    const check_name = (obj) => {
        if (obj !== "") {
            return obj;
        } else {
            return item.name;
        }
    };

    /*const check_added = () => {
        if (persVistos !== undefined) {
            console.log(persVistos);
            persVistos.map((inst) => {
                if (inst.id === item.id) {
                    console.log(inst.id);
                    setVisitado(false);
                } else {
                    setVisitado(true);
                }
            })

        }else{
            setVisitado(true);
        }
    };*/
    const nomeA = {
        fontFamily: "Roboto, sans-serif",
    };
    const nomeB = {
        fontFamily: "Roboto, sans-serif",
        color: "#ff7f00"
    };

    const {auth, persVistos} = props;

    return (

        <div className={"mainDiv mt-5 mr-5 ml-5 mb-4"}>

            <div className="container row info">
                <div className={"col-12 d-flex cima"}>
                    <span className={"col-1"}><Link to={`${str}`}><button className={"btn mt-2"}>voltar</button></Link></span>
                    <h1 className={"text-center col-8 offset-1 title-font"}>{item.name}</h1>
                </div>
                <div className="col-md-12 col-lg-3 text-center">
                    <section className={"text-center"}>
                        <img src={check_image(item.image.url)} className={"img-fluid img-details col-12"}/>
                    </section>
                </div>
                <div className="col-md-12 col-lg-4 mt-3 row text-left">
                    <section className="col-6">
                        <h3 style={nomeB}><b>Nome</b></h3>
                        <h5 style={nomeA}>{check_name(item.biography["full-name"])}</h5>
                    </section>
                    <section className="col-6">
                        <h3 style={nomeB}><b>Universo</b></h3>
                        <h5 style={nomeA}>{item.biography["publisher"]}</h5>
                    </section>
                    <section className="col-6">
                        <h3 style={nomeB}><b>Aparência</b></h3>
                        <h5 style={nomeA}>Género: {check_empty(item.appearance["gender"])}</h5>
                        <h5 style={nomeA}>Raça: {check_empty(item.appearance["race"])}</h5>
                        <h5 style={nomeA}>Altura: {check_empty(item.appearance.height[1])}</h5>
                        <h5 style={nomeA}>peso: {check_empty(item.appearance.weight[1])}</h5>
                    </section>
                    <section className="col-6">
                        <h3 style={nomeB}><b>Outros Nomes</b></h3>
                        <h5 className={"text-justify"} style={nomeA}>{item.biography.aliases.map((obj) =>
                            check_array_empty(obj)
                        )}</h5>
                    </section>
                    <section className="col-12">
                        <h3 style={nomeB}><b>Primeira aparência</b></h3>
                        <h5 className={"text-justify"} style={nomeA}>{item.biography["first-appearance"]}</h5>
                    </section>
                </div>
                <div className="col-md-12 col-lg-4 mt-2 text-center offset-lg-1 rightSide">
                    <h1 className={"text-center"} style={nomeB}><b>Mais sobre</b></h1>
                    <div className={"col-12"}>
                        <iframe width="400" height="250" src={"https://www.youtube.com/embed/" + YTvid} frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullscreen/>
                    </div>

                    <span className={"col-12"}><button className={"btn mt-3 mb-2"} onClick={() => {
                        handleGuardar(auth.uid)
                    }}>Já avistou este ser?</button></span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        persVistos: state.firebase.profile.persVistos,
        profile:state.firebase.profile
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        encontrado: (personagens, uid, prevprofile) => dispatch(encontrado(personagens, uid, prevprofile))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(HeroDetails);

