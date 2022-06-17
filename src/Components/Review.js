import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { getReview, addVote } from '../Utils/api';

export default function Review() {
    const [review, setReview] = useState({})
    const [votes, setVotes] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const {review_id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() =>{
        getReview(review_id).then((review) =>{
            setReview(review);
            setVotes(review.votes);
            setIsLoading(false);
        }).catch(({response : {data : {msg}}}) =>{
            navigate("/error", {state: {errMsg : msg}})
        })
    }, [review_id])

    function handleVote(voteChange){
        setButtonDisabled(true);
        setVotes((currVotes) =>{
            return currVotes += voteChange;
        })
        addVote(review_id, voteChange).catch(() =>{
            setVotes((currVotes) =>{
                return --currVotes;
            })
            setButtonDisabled(false);
            alert("Error changing the vote count, please try again.");
        });
    }

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
            <span>
                {votes} Vote{votes !== 1 ? 's' : ''}
                <button onClick={() => {handleVote(1)}} disabled={buttonDisabled}>Up Vote</button> 
                <button onClick={() => {handleVote(-1)}} disabled={buttonDisabled}>Down Vote</button>
            </span>
        </div>
    )

}
