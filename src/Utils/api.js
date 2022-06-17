const axios = require('axios').default;

const api = axios.create({baseURL : "https://doubl-n-games.herokuapp.com/api"});

exports.getReviews = (category) =>{
    let searchParams = (new URL(document.location)).searchParams;
    
    let sort_by = searchParams.get('sort_by');

    if(sort_by === 'null') sort_by = null;

    let order = searchParams.get('order');

    if(order === 'null') order = null;
    
    let params = {sort_by, order};

    if(category !== undefined || category === 'Choose+a+category'){
        params.category = category;
    }

    return api.get("/reviews", {params}).then(({data : {reviews}}) =>{
        return reviews;
    })
}

exports.getReview = (review_id) =>{
    return api.get(`/reviews/${review_id}`).then(({data : {review}}) =>{
        return review;
    })
}

exports.addVote = (review_id, inc_votes) =>{
    return api.patch(`reviews/${review_id}`, {inc_votes}).then(({data : {review}}) =>{
        return review;
    })
}

exports.getComments = (review_id) =>{
    return api.get(`reviews/${review_id}/comments`).then(({data : {comments}}) => {
        return comments;
    })
}

exports.postComment = (review_id, username, body) =>{
    return api.post(`reviews/${review_id}/comments`, {username, body}).then(({data : {comment}}) =>{
        return comment;
    })
}

exports.deleteComment = (comment_id) =>{
    return api.delete(`comments/${comment_id}`);
}