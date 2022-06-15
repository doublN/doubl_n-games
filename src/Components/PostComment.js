import {useState} from 'react'

export default function PostComment() {
  const [comment, setComment] = useState("")

  function handleSubmit(event){
      //api call
  }

  console.log(comment);

  return (
    <form onSubmit={handleSubmit}>
      <label>Post a Comment:</label>
      <input type="text" onChange={(event) => {setComment(event.target.value)}} value={comment}/>
      <input type="submit"></input>
    </form>
  )
}
