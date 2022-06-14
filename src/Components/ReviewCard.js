import dateString from '../Utils/dateString.js'

export default function ReviewCard({review}) {
    let date = dateString(new Date(review.created_at))
  
    return (
    <li className="reviewCard">
        <h3>{review.title}</h3>
        <img src={review.review_img_url} alt={review.title}/>
        <p>Designer: {review.designer}</p>
        <p>Owner: {review.owner}</p>
        <p>Category: {review.category}</p>
        <p>{review.comment_count} comments</p>
        <p>{review.votes} votes</p>
        <p>Posted on: {date}</p>
    </li>
  )
}
