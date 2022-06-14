import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ReviewCard from './ReviewCard.js'
import getReviews from '../Utils/api'

export default function Reviews({isLoading, setIsLoading}) {
    const [reviews, setReviews] = useState([]);

    const {category} = useParams();

      useEffect(() => {
        console.log("useEffect")
        getReviews(category).then((reviews) =>{
            setReviews(reviews);
            setIsLoading(false);
        })
      }, [category])

    if(isLoading){
        return <p className='loadingText'>... Loading!</p>
    }
    
    console.log("Render")

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
