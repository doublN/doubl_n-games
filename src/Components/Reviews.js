import {useState, useEffect} from 'react'
import ReviewCard from './ReviewCard.js'
import getReviews from '../Utils/api'

export default function Reviews() {
    const [reviews, setReviews] = useState([{
        "review_id": 14,
        "title": "Velit tempor ullamco amet ipsum dolor voluptate.",
        "category": "hidden-roles",
        "designer": "Don Keigh",
        "owner": "cooljmessy",
        "review_body": "Nostrud anim cupidatat incididunt officia cupidatat magna. Cillum commodo voluptate laboris id incididunt esse elit ipsum consectetur non elit elit magna. Aliquip sint amet eiusmod magna. Fugiat non ut ex eiusmod elit. Esse anim irure laborum aute ut ad reprehenderit. Veniam laboris dolore mollit mollit in. Cillum in aliquip adipisicing ipsum et dolor veniam qui ut ullamco aliquip in. Dolor fugiat elit laborum elit cupidatat aute qui nostrud. Duis incididunt ea nostrud minim consequat. Reprehenderit mollit cupidatat do culpa aliqua culpa mollit minim eiusmod. Deserunt occaecat ipsum ex ut pariatur eu veniam cillum nulla ex nostrud. Do nostrud amet duis proident nostrud eiusmod occaecat reprehenderit. Quis et cupidatat tempor qui dolor id veniam in sunt ipsum eiusmod. Sint tempor commodo consectetur mollit proident culpa nulla est tempor ullamco tempor aliquip laboris.",
        "review_img_url": "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg",
        "created_at": "2021-02-05T11:27:26.563Z",
        "votes": 3,
        "comment_count": 1
      }]);

      useEffect(() => {
        getReviews().then((reviews) =>{
            setReviews(reviews);
        })
      })

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
