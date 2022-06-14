const api = require('axios').default;

function getReviews (){
    return api.get("https://doubl-n-games.herokuapp.com/api/reviews").then(({data : {reviews}}) =>{
        return reviews;
    })
}

export default getReviews;