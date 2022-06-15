import dateString from '../Utils/dateString'

export default function CommentCard({comment}) {
  let date = dateString(new Date(comment.created_at))

  return (
    <div className="commentCard">
        <p>{comment.body}</p>
        <p>Posted by {comment.author} on {date}</p>
        <p>{comment.votes} votes</p>
        <button>Up Vote</button>
        <button>Down Vote</button>
        <button>Delete</button>
    </div>
  )
}
