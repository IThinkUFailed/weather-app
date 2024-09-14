import axios from "axios"
import {useEffect, useState } from "react"
import Weather from "./Weather"
let url = 'https://nominatim.openstreetmap.org/search?q='
const format = '&format=json'
const Location = ({results, setResults, searchTerm}) =>{
const [isLoading, setIsLoading] = useState(false)

useEffect(()=> {
    if (!searchTerm) {
        return 
    }
    setIsLoading(true)
     if (searchTerm) {
        url += `${searchTerm}${format}`
    axios.get(url).then(({data})=>{
        console.log(data ,'Data')
        setResults(data)
        setIsLoading(false) 
    })
}
}, [searchTerm])

const firstResult = results[0]
if (results.length > 0) {
    return (
        <>
            <h2>First Search Result:</h2>
            <p><strong>Place Name:</strong> {firstResult.display_name}</p>
            <p><strong>Latitude:</strong> {firstResult.lat}</p>
            <p><strong>Longitude:</strong> {firstResult.lon}</p>
            
            {/* Pass firstResult to Weather component */}
            <Weather firstResult={firstResult} />
        </>
    )
} else {
    return <p>No results found</p>
}
}

export default Location