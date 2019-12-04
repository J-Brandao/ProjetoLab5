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

export function getYTVids_Origins(search){
    console.log(search);
        return axios({
            "method":"GET",
            "url":"https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmH3bv6CM3TKFxN0jk2m9jMgEyYQMaSPA&maxResult=1&part=snippet&q="+search+"%20Super%20Hero%20Origins",


        })
}


