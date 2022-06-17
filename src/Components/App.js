import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import '../App.css';
import {UserContext} from '../Contexts/UserContext'
import Header from './Header.js'
import Navbar from './Navbar'
import ReviewPage from './ReviewPage';
import Reviews from './Reviews'
import ErrorPage from './ErrorPage'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState("");

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <Header setIsLoading={setIsLoading}/>
        <Navbar setIsLoading={setIsLoading}/>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/" element={<Reviews isLoading={isLoading} setIsLoading={setIsLoading}/>} />
          <Route path="/:category" element={<Reviews isLoading={isLoading} setIsLoading={setIsLoading}/>} />
          <Route path="/review/:review_id" element={<ReviewPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
