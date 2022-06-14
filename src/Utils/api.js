const axios = require('axios').default;

const api = axios.create({baseURL : "https://doubl-n-games.herokuapp.com/api"});

function getReviews (category){
    let route = "/reviews";

    if(category !== undefined || category === 'Choose+a+category'){
        route += `?category=${category}`
    }

    return api.get(route).then(({data : {reviews}}) =>{
        return reviews;
    })
}

export default getReviews;