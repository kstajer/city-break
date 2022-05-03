import { useState, useRef, React } from 'react'
import { useParams } from 'react-router-dom';
import Collapsible from '../components/Collapsible';

const City = () => {
    let { id } = useParams();
    const data = require('../data/cities.json'); 
    const city = data.cities[id];


  return (
    <div className='content container'>
        <div className='city'>
            <h1>{city.cityName}</h1>
            <Collapsible desc={city.description} text={"Info"}/>
            <Collapsible desc={city.flights} text={"Dojazd"}/>
            <Collapsible desc={city.places[0].description} text={"Atrakcje"}/>
        </div>
    </div>
  )
}

export default City