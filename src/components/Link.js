import React from 'react'

const Link = ({ link, name }) => {
  return (
    <div className='col3'>
        <h2>Tanie loty</h2>
        <h2>Polska &rarr; {name}</h2>
        <a href={link}>Sprawdź tutaj</a>
    </div>
  )
}

export default Link