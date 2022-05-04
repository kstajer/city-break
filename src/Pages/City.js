import { useState, useRef, React } from 'react'
import { useParams } from 'react-router-dom';
import Collapsible from '../components/Collapsible';
import Place from '../components/Place'
import Weather from '../components/Weather'

const City = () => {
  let { id } = useParams();
  const data = require('../data/cities.json');
  const city = data.cities[id];


  return (
    <div className='content container'>
      <div className='city'>
        <h1 className='title'>{city.cityName}</h1>
        <Collapsible desc={city.description} text={"INFO"} />
        <Collapsible desc={city.flights} text={"DOJAZD"} />
        <Collapsible desc=
          {<>
            <Place link={city.places[0].photo} name={city.places[0].name} desc={city.places[0].description} />
            <Place link={city.places[1].photo} name={city.places[1].name} desc={city.places[1].description} />
            <Place link={city.places[2].photo} name={city.places[2].name} desc={city.places[2].description} />
          </>} text={"ATRAKCJE"} />
      </div>
      <Weather cityName={city.cityName}/>
    </div>
  )
}

export default City