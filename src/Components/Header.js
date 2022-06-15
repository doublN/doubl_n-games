import {Link} from 'react-router-dom'

export default function Header({setIsLoading}) {
  return (
    <Link to="/" onClick={() => {setIsLoading(true)}} className="linkStyle"><h1>The Social Game Review</h1></Link>
  )
}