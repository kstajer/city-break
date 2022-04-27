import { useState, React} from 'react'
import { useParams } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const City = () => {
    let { id } = useParams();
    const data = require('../data/cities.json'); 
    const city = data.cities[id];
    const [showInfo, setShowInfo] = useState(false);
    const [showFlights, setShowFlights] = useState(false);

  return (
    <div className='content container'>
        <div className='city'>
            <h1>{city.cityName}</h1>
            <button className='toggle-btn' onClick={()=> {
                setShowInfo(!showInfo);
            }}>Info</button>
            { showInfo && <div className="city-info">{city.description}</div>}

            <button className='toggle-btn' onClick={()=> {
                setShowFlights(!showFlights);
            }}>Dojazd</button>
            { showFlights && <div className='city-info'>{city.flights}</div>}
        </div>
    </div>
  )
}

export default City