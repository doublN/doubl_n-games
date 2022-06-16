import {useNavigate, Link} from 'react-router-dom';
import {useState, useContext} from 'react';
import {UserContext} from '../Contexts/UserContext'

export default function Navbar({setIsLoading}) {
  const [chosenCategory, setChosenCatgory] = useState("");
  const {user, setUser} = useContext(UserContext)
  let navigate = useNavigate();

  function handleChange(event){
    setChosenCatgory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    setIsLoading(true);
    navigate(`/${chosenCategory}`)
  }

  function handleLogIn(event){
    setUser("tickle122");
  }

  return (
    <nav id="navbar">
        <Link to="/" onClick={() => {setIsLoading(true)}}>Home</Link>
        <form onSubmit={handleSubmit}>
            <select name="category" onChange={handleChange}>
                <option value="">Choose a Category</option>
                <option value="strategy">strategy</option>
                <option value="hidden-roles">hidden roles</option>
                <option value="dexterity">dexterity</option>
                <option value="push-your-luck">push your luck</option>
                <option value="roll-and-write">roll and write</option>
                <option value="deck-building">deck building</option>
                <option value="engine-building">engine building</option>
            </select>
            <input type='submit' />
        </form>
        {user === "" ? <button onClick={handleLogIn}>Log in</button> : user}
    </nav>
  )
}
