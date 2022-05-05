import { useState, useRef, React } from 'react'
import { useParams } from 'react-router-dom';
import Collapsible from '../components/Collapsible';
import Place from '../components/Place'
import Weather from '../components/Weather'
import Link from '../components/Link';

const City = () => {
  let { id } = useParams();
  const data = require('../data/cities.json');
  const city = data.cities[id];

  const isMobile = window.innerWidth <= 500;
  if (!isMobile) {
    return (
      <div className='content container'>
        <Link link={city.skyLink} name={city.cityName} />
        <div className='city'>
          <h1 className='title'>{city.cityName}</h1>
          <Collapsible desc={city.description} text={"INFO"} />
          <Collapsible desc={city.flights} text={"DOJAZD"} />
          <Collapsible desc=
            {
              city.places.map(function (content) {
                return (
                  <div key={content.name} >
                    <Place link={content.photo} name={content.name} desc={content.description} />
                  </div>)
              })} text={"ATRAKCJE"} />
        </div>
        <Weather cityName={city.cityName} />
        
        
      </div>
    )
  } else
  {
    return (
      <div className='content container-mobile'>
        <div className='city'>
          <h1 className='title'>{city.cityName}</h1>
          <Collapsible desc={city.description} text={"INFO"} />
          <Collapsible desc={city.flights} text={"DOJAZD"} />
          <Collapsible desc=
            {
              city.places.map(function (content) {
                return (
                  <div key={content.name} >
                    <Place link={content.photo} name={content.name} desc={content.description} />
                  </div>)
              })} text={"ATRAKCJE"} />
        </div>
      </div>
    )
  }

}

export default City