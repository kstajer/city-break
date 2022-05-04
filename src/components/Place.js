import { useState, useRef, useEffect, React } from 'react'


const Place = ({ name, link, desc }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img className='photo' src={link}></img>
      <div>{desc}</div>
    </div>
  )
}

export default Place