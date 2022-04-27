import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cities = () => {
  let navigate = useNavigate();

  return (
    <div className='content'>
          <h1>Najpopularniejsze miasta na city break:</h1>
          <div className="bigger-text" onClick={() => {
            navigate("/city/0")
          }}>Barcelona</div>
          <div className="bigger-text" onClick={() => {
            navigate("/city/1")
          }}>Londyn</div>          
    </div>
  )
}

export default Cities