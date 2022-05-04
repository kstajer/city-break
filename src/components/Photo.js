import React from 'react'

const Photo = ({ name, img }) => {
  return (
        <>
            <img className='img' src={img}></img>
            <span className='img-desc'>{name}</span>
            <span className='img-desc-span'> </span>
        </>
  )
}

export default Photo