import {useState} from 'react'
import Comments from './Comments'
import PostComment from './PostComment'

export default function CommentSection() {
  const [comments, setComments] = useState([])

  return (
    <div id="commentSection">
    <h2>Comments</h2>
      <PostComment setComments={setComments} />
      <Comments comments={comments} setComments={setComments}/>
    </div>
  )
}
