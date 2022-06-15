import {useState} from 'react'
import {useParams} from 'react-router-dom'
import { postComment } from '../Utils/api';

export default function PostComment({setComments}) {
  const [comment, setComment] = useState("")
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const {review_id} = useParams();
  function handleSubmit(event){
    event.preventDefault();
    setButtonDisabled(true);
    postComment(review_id, 'tickle122', comment).then((comment) =>{
      setComments((currentComments) =>{
        setButtonDisabled(false);
        return [comment, ...currentComments]
      })
    });
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Post a Comment:</label>
      <input type="text" onChange={(event) => {setComment(event.target.value)}} value={comment} required/>
      <input type="submit" disabled={buttonDisabled}></input>
    </form>
  )
}
