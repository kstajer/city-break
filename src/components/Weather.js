import { React, useState, useEffect } from 'react'

const KEY = "0a24c50197555729b6d48d6806a9725e";

const Weather = ({ cityName }) => {
    const [apiData, setApiData] = useState({});

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}&units=metric`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setApiData(data));
    }, [url]);

    console.log(apiData)
    return (
        <div>
            <h3>Pogoda</h3>
            <div>Teraz
                <br />
                {apiData.main ? (
                    <>
                        <img src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`} />
                        <div>
                        {Math.round(apiData.main.temp)}&deg; C
                        </div>
                    </>
                ) :
                    (
                        <p>Ładowanie</p>
                    )}
            </div>
        </div>
    )
}

export default Weather