import dateString from '../Utils/dateString'

export default function CommentCard({comment}) {
  let date = dateString(new Date(comment.created_at))

  return (
    <div className="commentCard">
        <p className="commentBody">{comment.body}</p>
        <p>Posted by {comment.author} on {date}</p>
        <span className="commentSpan">
          {comment.votes} votes
          <button>Up Vote</button>
          <button>Down Vote</button>
          <button id="deleteButton">Delete</button>
        </span>
    </div>
  )
}
