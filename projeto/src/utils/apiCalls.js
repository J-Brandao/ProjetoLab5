const axios=require("axios").default;




export function getHerobyID(id){

    return axios({
        "method": "GET",
        "url": "/2443642102517801/"+id,
        "headers": {
            "content-type": "application/JSON",

        }
    });



}

export function getYTVids(){

}
