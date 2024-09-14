import { useState } from "react"
import Location from './Location'

const Search = (({results, setResults})=>{

    const [searchInput, setSearchInput] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = ((event) => {
        setSearchInput(event.target.value)
    })

    const handleSubmit = ((event) => {
        event.preventDefault()
        setSearchTerm(searchInput)
        setSearchInput('')
    })
   
    return (
        <>
        <form onSubmit={handleSubmit}>
            <p>See what the weather is like in your location!</p>
                <p>You can either enter an address or city in the world!</p>
            <label htmlFor="search"></label>
            <input id='search' onChange={handleChange} value={searchInput}></input>
            <button className="search-btn">Search</button>
        </form>
        <Location searchTerm={searchTerm} results={results} setResults={setResults}/>
        </>
    )
})

export default Search