import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import ReviewCard from './ReviewCard.js'
import getReviews from '../Utils/api'

export default function Reviews({isLoading, setIsLoading}) {
    const [reviews, setReviews] = useState([]);

    const {category} = useParams();
      useEffect(() => {
        getReviews(category).then((reviews) =>{
            setReviews(reviews);
            setIsLoading(false);
        })
      }, [category])

    if(isLoading){
        return <p className='loadingText'>... Loading!</p>
    }

    return (
        <ul className="reviewsList">
            {reviews.map((review) =>{
                return(
                    <Link to={`/review/${review.review_id}`} key={review.review_id} className='linkStyle'>
                        <ReviewCard review={review} />
                    </Link>
                )
            })}
        </ul>
    )
}
