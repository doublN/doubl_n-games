import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CommentCard from './CommentCard';
import {getComments} from '../Utils/api'

export default function Comments() {
    const [comments, setComments] = useState([])

    const {review_id} = useParams();

    useEffect(() =>{
        getComments(review_id).then((comments) =>{
            setComments(comments);
        })
    })

    return (
        <ul>
            {comments.map((comment) =>{
                return <CommentCard comment={comment} key={comment.comment_id}/>
            })}
        </ul>
    )
}
