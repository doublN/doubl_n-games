import {useState} from 'react'
import {useParams} from 'react-router-dom'

export default function Review() {
    const [review, setReview] = useState({
        "review_id": 2,
        "title": "JengARRGGGH!",
        "category": "dexterity",
        "designer": "Leslie Scott",
        "owner": "grumpy19",
        "review_body": "Few games are equiped to fill a player with such a defined sense of mild-peril, but a friendly game of Jenga will turn the mustn't-make-it-fall anxiety all the way up to 11! Fiddly fun for all the family, this game needs little explaination. Whether you're a player who chooses to play it safe, or one who lives life on the edge, eventually the removal of blocks will destabilise the tower and all your Jenga dreams come tumbling down.",
        "review_img_url": "https://images.pexels.com/photos/4009761/pexels-photo-4009761.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "created_at": "2021-01-18T10:01:41.251Z",
        "votes": 5,
        "comment_count": 3
      })

    const {review_id} = useParams();

    return(
        <div id="review">
            <h2>{review.title} by {review.designer}</h2>
            <h3>{review.category}</h3>
            <img src={review.review_img_url} alt={review.title}/>
            <h3>Review by {review.owner}</h3>
            <p id="reviewBody">{review.review_body}</p>
            <span>Votes: {review.votes} <button>Upvote</button> <button>DownVote</button></span>
        </div>
    )

}
