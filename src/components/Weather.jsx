import axios from "axios"
import { useEffect, useState } from "react"

let baseUrl = 'https://api.open-meteo.com/v1/forecast?latitude='
let variablesOfUrl = '&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m'

const Weather = ({ firstResult }) => {
    const [theWeather, setTheWeather] = useState([])

    useEffect(() => {
        if (!firstResult) return;

        // Construct proper URL with latitude and longitude
        const url = `${baseUrl}${firstResult.lat}&longitude=${firstResult.lon}${variablesOfUrl}`

        axios.get(url)
            .then(({ data }) => {
                setTheWeather(data)
                console.log(data)
            })
            .catch(err => {
                console.log("Error fetching the weather data: ", err)
            })
    }, [firstResult])

    if (!theWeather || !theWeather.hourly) {
        return <p>Loading weather data...</p>
    }

    return (
        <>
            <h2>The Weather in {firstResult.display_name}</h2>
            <p>The temperature is {theWeather.hourly.temperature_2m ? theWeather.hourly.temperature_2m[0] : 'N/A'}°C</p>
        </>
    )
}

export default Weather
