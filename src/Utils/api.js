const axios = require('axios').default;

const api = axios.create({baseURL : "https://doubl-n-games.herokuapp.com/api"});

function getReviews (category){
    let params = {}

    if(category !== undefined || category === 'Choose+a+category'){
        params.category = category;
    }

    return api.get("/reviews", {params}).then(({data : {reviews}}) =>{
        return reviews;
    })
}

export default getReviews;