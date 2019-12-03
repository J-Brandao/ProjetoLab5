const axios=require("axios").default;




export function getHerobyID(id){
    axios.get("/2443642102517801/search/batman")
        .then((response)=>{
            console.log(response);

        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            console.log("funcao foi chamada")
        })

}

export function getYTVids(){

}
