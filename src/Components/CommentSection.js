import Comments from './Comments'
import PostComment from './PostComment'

export default function CommentSection() {
  return (
    <div id="commentSection">
    <h2>Comments</h2>
      <PostComment/ >
      <Comments />
    </div>
  )
}
