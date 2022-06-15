import dateString from '../Utils/dateString'

export default function CommentCard({comment}) {
  let date = dateString(new Date(comment.created_at))

  return (
    <div className="commentCard">
        <h3>{comment.author}</h3>
        <button>Delete</button>
        <p>{comment.body}</p>
        <p>{comment.votes} votes</p>
        <button>Up Vote</button>
        <button>Down Vote</button>
        <p>Posted on {date}</p>
    </div>
  )
}
