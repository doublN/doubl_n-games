import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getReview } from '../Utils/api';

export default function Review() {
    const [review, setReview] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const {review_id} = useParams();
    useEffect(() =>{
        getReview(review_id).then((review) =>{
            setReview(review);
            setIsLoading(false);
        })
    })

    if(isLoading){
        return <p className="loadingText">...Loading Review!</p>
    }

    return(
        <div id="review">
            <h2>{review.title} by {review.designer}</h2>
            <h3>{review.category.split('-').join(' ')}</h3>
            <img src={review.review_img_url} alt={review.title}/>
            <h3>Review by {review.owner}</h3>
            <p id="reviewBody">{review.review_body}</p>
            <span>Votes: {review.votes} <button>Upvote</button> <button>DownVote</button></span>
        </div>
    )

}
