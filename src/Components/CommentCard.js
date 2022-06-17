import {useContext, useState} from 'react'
import {UserContext} from '../Contexts/UserContext'
import {deleteComment} from '../Utils/api'
import dateString from '../Utils/dateString'

export default function CommentCard({comment}) {
  const [commentDeleted, setCommentDeleted] = useState(false);
  const {user} = useContext(UserContext);

  let date = dateString(new Date(comment.created_at))


  function handleDelete(comment_id, author){
    setCommentDeleted(true);
    if(user === author) {
      deleteComment(comment_id).catch(() =>{
        alert("Error deleting comment, please try again");
        setCommentDeleted(false);
      });
    } else { 
      alert("You cannot delete other user's comments! (Are you logged in?)");
      setCommentDeleted(false);
    }
  }

  if(commentDeleted === true){
    return (
      <div className="commentCard">
        <p className="commentBody">comment deleted!</p>
      </div>
    )
  }

  return (
    <div className="commentCard">
        <p className="commentBody">{comment.body}</p>
        <p>Posted by {comment.author} on {date}</p>
        <span className="commentSpan">
          {comment.votes} votes
          <button>Up Vote</button>
          <button>Down Vote</button>
          <button id="deleteButton" onClick={() => {handleDelete(comment.comment_id, comment.author)}} disabled={commentDeleted}>Delete</button>
        </span>
    </div>
  )
}
