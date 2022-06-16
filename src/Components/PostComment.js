import {useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { postComment } from '../Utils/api';
import {UserContext} from '../Contexts/UserContext'

export default function PostComment({setComments}) {
  const [comment, setComment] = useState("")
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const {user} = useContext(UserContext)

  const {review_id} = useParams();
  function handleSubmit(event){
    event.preventDefault();
    setButtonDisabled(true);
    postComment(review_id, user, comment).then((comment) =>{
      setComments((currentComments) =>{
        setButtonDisabled(false);
        return [comment, ...currentComments]
      })
    }).catch((err) =>{
      alert("Error posting comment, please try again (are you logged in?)");
      setButtonDisabled(false);
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
