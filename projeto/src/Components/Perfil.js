import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

 function Perfil(props)
{
const {profile}=props;
if(profile.persVistos!==undefined) {


    console.log(profile.persVistos.nome);



    return (
        <div className={"mainDiv mt-5 mr-5 ml-5 mb-4"}>
            <div className={"col-12 d-flex cima"}>
                <Link to={`/universos`}>
                    <button className={"btn mt-2"}>voltar</button>
                </Link>
                <h1 className={"text-center col-8 offset-1 title-font"}>{profile.nomeAgente}-{profile.codAgente}</h1>
            </div>
            <h2 className={"text-center col-8  title-font mx-auto"}>Heróis que já encontrei</h2>
            <div className="section">

                {profile.persVistos.map((item, index)=>{
                    const estilo = {
                        width: "200px",
                        height: "200px",
                        padding: 0,
                        margin: "10px",
                        border: "2px solid red",
                        backgroundImage:`url(${item.imagem})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        borderRadius: "5px",
                        color: "white",
                        fontStyle: "Titles"
                    };
                    return(
                        <Link key={index} to={`/perfil/${item.id}`}>
                        <button className={"col-4 btn_list"} style={estilo}>
                            <span className={"button_text title-font px-3"}>{item.nome}</span>
                        </button>
                        </Link>
                    )
                })}



            </div>
        </div>
    );
}else{
    return <div>hgtr</div>
}
}

const mapStateToProps = (state)=>{
  return {profile:state.firebase.profile};


};
export default connect(mapStateToProps,null)(Perfil);

