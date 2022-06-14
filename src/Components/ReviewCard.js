import dateString from '../Utils/dateString.js'

export default function ReviewCard({review}) {
    let date = dateString(new Date(review.created_at))
  
    return (
    <li className="reviewCard">
    <div className="reviewTitle">
        <h3>{review.title}</h3>
    </div>
    <div className="reviewImg">
        <img src={review.review_img_url} alt={review.title}/>
    </div>
    <div className="reviewDetails">
        <p>Designer: {review.designer}</p>
        <p>Owner: {review.owner}</p>
        <p>Category: {review.category.split("-").join(" ")}</p>
        <p>{review.comment_count} comments</p>
        <p>{review.votes} votes</p>
        <p>Posted on: {date}</p>
    </div>
    </li>
  )
}
