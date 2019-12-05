import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagem from "../85.jpg";
import './Rangel.css';
import {getHerobyID, getYTVids, getYTVids_Origins} from "../utils/apiCalls";

function HeroDetails({match}) {
console.log("ol");



    useEffect(() => {
        console.log(match.params.id);
        let PR = new Promise(

            async (ok,nok) => {
                await getHerobyID(match.params.id).then(res => {
                    setItem(res.data);
                    console.log(res.data);

                    ok(res.data.name);

                })
                    .catch(error => {
                        console.log(error);
                        nok();
                    })

            });
        PR.then(fetch_video_origins, ()=>console.log("not OK"));
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


    const nomeA = {
        fontFamily: "Roboto, sans-serif",
    };



    return (

        <div>

            <div className="container row">
                <div className="col-3 side">
                    <section className={"mt-4"}>
                        <img src={item.image.url} className={"img-fluid img-details"}/>
                        <h1 className={"text-center title-font"}>{item.name}</h1>
                    </section>
                </div>
                <div className="col-4 mt-3 row text-left">
                    <section className="col-6">
                        <h3 className="title-font">Name</h3>
                        <h5 style={nomeA}>{check_name(item.biography["full-name"])}</h5>
                    </section>
                    <section className="col-6">
                        <h3 className="title-font">Universe</h3>
                        <h5 style={nomeA}>{item.biography["publisher"]}</h5>
                    </section>
                    <section className="col-6">
                        <h3 className="title-font">Appearance</h3>
                        <h5 style={nomeA}>Gender: {check_empty(item.appearance["gender"])}</h5>
                        <h5 style={nomeA}>Race: {check_empty(item.appearance["race"])}</h5>
                        <h5 style={nomeA}>Height: {check_empty(item.appearance.height[1])}</h5>
                        <h5 style={nomeA}>Weight: {check_empty(item.appearance.weight[1])}</h5>
                    </section>
                    <section className="col-6">
                        <h3 className="title-font">Aliases</h3>
                        <h5 className={"text-justify"} style={nomeA}>{item.biography.aliases.map((obj) =>
                            <h5>{check_array_empty(obj)}</h5>
                        )}</h5>
                    </section>
                    <section className="col-12">
                        <h3 className="title-font">First Appearance</h3>
                        <h5 className={"text-justify"} style={nomeA}>{item.biography["first-appearance"]}</h5>
                    </section>
                </div>
                <div className="col-5 mt-2">
                    <h1 className={"text-center title-font"}>More about him</h1>

                    <iframe width="400" height="250" src={"https://www.youtube.com/embed/" + YTvid} frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullscreen/>
                </div>
            </div>
        </div>
    )
}

export default HeroDetails;