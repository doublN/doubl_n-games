const axios = require('axios').default;

const api = axios.create({baseURL : "https://doubl-n-games.herokuapp.com/api"});

function getReviews (){
    return api.get("/reviews").then(({data : {reviews}}) =>{
        return reviews;
    })
}

export default getReviews;