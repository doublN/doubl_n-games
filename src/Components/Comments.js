import {useState} from 'react'
import {useParams} from 'react-router-dom'
import CommentCard from './CommentCard';

export default function Comments() {
    const [comments, setComments] = useState([{
        "comment_id": 59,
        "body": "Quis duis mollit ad enim deserunt.",
        "review_id": 1,
        "author": "jessjelly",
        "votes": 3,
        "created_at": "2021-03-27T19:48:58.110Z"
      }])

    const {review_id} = useParams();

    return (
        <ul>
            {comments.map((comment) =>{
                return <CommentCard comment={comment} />
            })}
        </ul>
    )
}
