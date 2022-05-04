import { React, useState } from 'react'

const KEY = "0a24c50197555729b6d48d6806a9725e";
const city = "London";

const Weather = ({ cityName }) => {
    const [temp, setTemp] = useState(0);

    function fetchData() {
        const result = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`);
        return result;
    }


    return (
        <div>
            <h3>Pogoda</h3>
            <div>{cityName}, teraz</div>
            <div>15°C, Clouds</div>
        </div>
    )
}

export default Weather