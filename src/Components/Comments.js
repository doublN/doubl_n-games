import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CommentCard from './CommentCard';
import {getComments} from '../Utils/api'

export default function Comments({comments, setComments}) {
    
    const [isLoading, setIsLoading] = useState(true);

    const {review_id} = useParams();

    useEffect(() =>{
        getComments(review_id)
        .then((comments) =>{
            setComments(comments.reverse());
            setIsLoading(false);
        })
    }, [review_id])

    if(isLoading){
        return <p className="loadingText">... Loading Comments!</p>
    }

    if(comments.length === 0){
        return <p>No comments yet :( why not post one?</p>
    }

    return (
        <ul>
            {comments.map((comment) =>{
                return <CommentCard comment={comment} key={comment.comment_id}/>
            })}
        </ul>
    )
}
