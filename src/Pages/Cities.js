import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Photo from '../components/Photo';

const Cities = () => {
  let navigate = useNavigate();
  const data = require('../data/cities.json');
  var names = [];
  var imgs = [];
  var ids = [];


  data.cities.forEach((city) => {
    names.push(city.cityName);
    imgs.push(city.places[0].photo);
    ids.push(city.cityId)
  })

  const zip = (...arr) => Array(Math.max(...arr.map(a => a.length))).fill().map((_, i) => arr.map(a => a[i]));

  const content = zip(ids, names, imgs);



  return (
    <>
      <div className='title content'>Popularne kierunki</div>
      <div className='cities'>
        {content.map(function (content) {
          return (
            <div key={content[1]} className='img-parent' onClick={() => { navigate(`/city/${content[0]}`) }}>
              <Photo name={content[1]} img={content[2]} />
            </div>)
        })}
      </div>
    </>
  )
}

export default Cities