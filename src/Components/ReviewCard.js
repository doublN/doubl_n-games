import dateString from '../Utils/dateString.js'

export default function ReviewCard({review}) {
    let date = dateString(new Date(review.created_at))
  
    return (
    <li>
        <img src={review.review_img_url} alt={review.title}/>
        <p>{review.title}</p>
        <p>Designer: {review.designer}</p>
        <p>Owner: {review.owner}</p>
        <p>Category: {review.category}</p>
        <p>{review.comment_count} comments</p>
        <p>{review.votes} votes</p>
        <p>date posted: {date}</p>
    </li>
  )
}
