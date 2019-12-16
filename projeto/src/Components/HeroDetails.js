import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {getHerobyID, getYTVids, getYTVids_Origins} from "../utils/apiCalls";
import {Link} from 'react-router-dom';


export function  check_image(obj){
    console.log("yo");
    let img= new Image();
    img.src=obj;
    console.log(img.src);
    if (!img.complete) {
        return "https://tekrabuilders.com/wp-content/uploads/2018/12/male-placeholder-image.jpeg"
    }
    else if (img.height === 0) {
        return "https://tekrabuilders.com/wp-content/uploads/2018/12/male-placeholder-image.jpeg"
    }else{
        return obj;
    }




}
function HeroDetails({match}) {
console.log("ol");

    var str= match.url;
    var lastIndex = str.lastIndexOf("/");
    str = str.substring(0, lastIndex);
    console.log(str);

    useEffect(() => {
        console.log(match);
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

        <div className={"mainDiv m-5"}>

            <div className="container row info">
                <div className={"col-12 d-flex"}>
                    <Link to={`${str}`}><button className={"btn mt-2 text-font-bold"}>voltar</button></Link>
                    <h1 className={"text-center title-font col-8 offset-1"}>{item.name}</h1>
                </div>
                <div className="col-3 side mb-4">
                    <section className={"mt-4"}>
                        <img src={check_image(item.image.url)} className={"img-fluid img-details"}/>
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
                <div className="col-5 mt-2 text-center">
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