import {useState, useEffect} from 'react'
import ReviewCard from './ReviewCard.js'
import getReviews from '../Utils/api'

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        getReviews().then((reviews) =>{
            setReviews(reviews);
            setIsLoading(false);
        })
      })

    if(isLoading){
        return <p className='loadingText'>... Loading!</p>
    }
    
    return (
        <ul className="reviewsList">
            {reviews.map((review) =>{
                return(
                    <ReviewCard key={review.review_id} review={review} />
                )
            })}
        </ul>
    )
}
