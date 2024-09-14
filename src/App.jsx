import './App.css'
import { useState } from 'react'
import Weather from './components/Weather'
import Search from './components/Search'
function App() {
  const [results, setResults] = useState([])

  return (
    <>
    <Search results={results} setResults={setResults}/>
    <Weather />
    </>
  )
}

export default App
