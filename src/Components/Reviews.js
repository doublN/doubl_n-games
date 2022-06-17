import {useState, useEffect} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import ReviewCard from './ReviewCard.js'
import SortBar from './SortBar.js'
import {getReviews} from '../Utils/api'

export default function Reviews({isLoading, setIsLoading}) {
    const [reviews, setReviews] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [orderBy, setOrderBy] = useState(null);

    const {category} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
    getReviews(category).then((reviews) =>{
        setReviews(reviews);
        setIsLoading(false);

        return () => {setSortBy(null); setOrderBy(null)}
    }).catch(({response : {data : {msg}}}) =>{
        navigate("/error", {state : {errMsg : msg}});
    })
    }, [isLoading, sortBy, orderBy])

    if(isLoading){
        return <p className='loadingText'>... Loading!</p>
    }

    return (
        <>
            <SortBar setSortBy={setSortBy} sortBy={sortBy} setOrderBy={setOrderBy} orderBy={orderBy}/>
            <ul className="reviewsList">
                {reviews.map((review) =>{
                    return(
                        <Link to={`/review/${review.review_id}`} key={review.review_id} className='linkStyle'>
                            <ReviewCard review={review} />
                        </Link>
                    )
                })}
            </ul>
        </>
    )
}
