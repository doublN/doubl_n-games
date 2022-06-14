import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import '../App.css';
import Header from './Header.js'
import Navbar from './Navbar'
import Reviews from './Reviews'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Header />
      <Navbar setIsLoading={setIsLoading}/>
      <Routes>
        <Route path="/" element={<Reviews isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path="/:category" element={<Reviews isLoading={isLoading} setIsLoading={setIsLoading}/>} />
      </Routes>
    </>
  );
}

export default App;
